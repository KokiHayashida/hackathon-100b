# 診断結果のソーシャル共有機能 計画書

診断結果を X（Twitter）、Instagram、LINE で共有する機能の実装計画です。タイプ画像の共有方法、各プラットフォームの制約、実装方針をまとめています。

---

## 1. 各プラットフォームの制約と対応方針

| プラットフォーム | テキスト | URL | 画像 | 実装可能な範囲 |
|------------------|----------|-----|------|----------------|
| X（Twitter） | Web Intent で可能 | Web Intent で可能 | **Web Intent では不可** | text + url で共有。画像は別施策 |
| Instagram | Web Intent なし | - | Web Share API で可能（モバイル） | 画像ダウンロード or Web Share API |
| LINE | URL スキームで可能 | テキストに含める | **不可** | text + url で共有 |

---

## 2. タイプ画像を「一緒に共有」する方法

### 2.1 技術的な制約

- **X Web Intent**：`text`、`url`、`hashtags` のみ対応。画像の添付は不可。
- **LINE**：URL スキームでテキストのみ。画像は不可。
- **Instagram**：公式の Web Intent なし。画像を直接投稿するにはアプリ経由が必要。

### 2.2 実現可能なアプローチ

#### 方法A：URL のプレビューで画像を表示（X / LINE）

- 共有する URL に **Open Graph（og:image）** を設定
- SNS のリンクプレビューで、タイプごとの画像が表示される
- **要件**：結果表示ページの URL がタイプごとに異なる（例：`/result/SLAP`）必要
- **現状**：SPA で同一 URL の場合、動的 og:image の設定が必要

#### 方法B：共有用コンポジット画像の生成・ダウンロード

- タイプ画像 + 診断結果テキストを合成した画像を Canvas / html2canvas で生成
- 「画像をダウンロード」ボタンで保存 → ユーザーが手動で各 SNS に投稿
- **対象**：Instagram（手動投稿）、X（手動で画像添付）

#### 方法C：Web Share API（モバイル向け）

- `navigator.share({ files: [imageFile], text, url })` で OS の共有シートを表示
- ユーザーが「Instagram」や「X」を選択して共有
- **対応**：Android Chrome、iOS Safari など（デスクトップ対応は限定的）
- **画像**：コンポジット画像を Blob/File として渡す

---

## 3. 推奨実装方針

### フェーズ1：テキスト + URL 共有の拡充（実装容易）

| プラットフォーム | 実装方法 | 共有内容 |
|------------------|----------|----------|
| X | 既存の Web Intent を継続 | text + url + hashtags |
| LINE | `https://line.me/R/share?text=` + エンコード済みテキスト | 診断結果 1 行 + URL |
| Instagram | この段階では対象外 | - |

### フェーズ2：共有用画像の生成（中程度）

1. **コンポジット画像の生成**
   - タイプ画像（`/images/types/SLAP_0.png` 等）+ タイプ名・コード・キャッチコピーを合成
   - Canvas API または `html-to-image` 等のライブラリで描画
   - 出力：PNG Blob

2. **「画像をダウンロード」ボタン**
   - 生成した画像をダウンロード
   - ユーザーが Instagram・X 等に手動で投稿

3. **Web Share API ボタン**
   - `navigator.canShare({ files: [file] })` で対応可否を判定
   - 対応時：`navigator.share({ files: [imageFile], text, url })` で共有シート表示
   - 非対応時：「画像をダウンロード」にフォールバック

### フェーズ3：og:image によるプレビュー強化（要ルーティング）

- 結果ページを `/result/:typeCode` など個別 URL 化
- 各 URL に `<meta property="og:image" content="/images/types/SLAP_0.png" />` を設定
- React Helmet 等で `typeCode` に応じて動的に meta タグを更新
- X / LINE で URL を貼ったとき、プレビューにタイプ画像が表示される

---

## 4. 実装仕様（フェーズ1 + フェーズ2）

### 4.1 変更ファイル一覧

| ファイル | 変更内容 |
|----------|----------|
| `src/components/TypeDiagnose.jsx` | 共有ロジック追加、ボタン配置 |
| `src/utils/shareUtils.js` | 新規。共有用テキスト生成、プラットフォーム別 URL 生成 |
| `src/utils/compositeImageUtils.js` | 新規（フェーズ2）。コンポジット画像生成 |
| `src/App.css` | 共有ボタン用スタイル |

### 4.2 共有ボタンの配置

診断結果の `result-actions` 内に以下を配置：

- Xで共有（既存）
- LINEで共有（新規）
- 画像をダウンロード（新規・フェーズ2）
- SNSで共有（新規・フェーズ2・Web Share API、モバイル用）

### 4.3 LINE 共有の URL 形式

```
https://line.me/R/share?text={エンコード済みテキスト}
```

テキスト例：`【100億円タイプ診断】私のタイプは「堅実ビルダー型」（SLAP）でした！ {URL}`

- `encodeURIComponent()` でエンコード
- URL は短縮せずフルパスで含める（LINE がプレビュー表示）

### 4.4 共有用テキストの統一

全プラットフォームで共通の基本テキストを使用：

```
【100億円タイプ診断】私のタイプは「{name}」（{typeCode}）でした！
```

- X：`text` パラメータ + `url` + `hashtags`
- LINE：`text` に上記 + スペース + `window.location.href` を結合してエンコード

---

## 5. コンポジット画像の設計（フェーズ2）

### 5.1 画像レイアウト案

```
┌─────────────────────────────┐
│  [タイプ画像 中央配置]       │
│  max 400x400 px             │
├─────────────────────────────┤
│  100億円タイプ診断           │
│  SLAP 堅実ビルダー型         │
│  「100億円は、人生という…」  │
│  （引用・1行程度）           │
└─────────────────────────────┘
```

- サイズ：1200x630 px（og:image 推奨）または 800x800 px（Instagram 用）
- 背景：ダークテーマに合わせた単色またはグラデーション
- フォント：ゴシック体、視認性を優先

### 5.2 実装ライブラリの選択

- **html2canvas**：DOM を画像化。レイアウト調整が容易
- **Canvas API 直接**：軽量だがレイアウト実装コストが高い
- **推奨**：`html-to-image`（html2canvas の軽量版）または `html2canvas`

---

## 6. 実装の優先順位

1. **LINE で共有**：URL スキームのみで実装可能。工数小。
2. **画像をダウンロード**：コンポジット画像生成。Instagram 手動投稿の導線になる。
3. **Web Share API**：`navigator.share` で画像付き共有。モバイル対応。
4. **og:image 動的設定**：ルーティング導入後。URL 共有時のプレビュー向上。

---

## 7. 参考リンク

- [X Web Intent](https://developer.x.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent)
- [LINE URL スキーム](https://developers.line.biz/ja/docs/messaging-api/using-line-url-scheme/)
- [Web Share API - MDN](https://developer.mozilla.org/ja/docs/Web/API/Navigator/share)
- [Open Graph Protocol](https://ogp.me/)
