# フェーズ1 詳細計画：テキスト + URL 共有の拡充

## 1. 概要

X（Twitter）は既存実装を維持しつつ、LINE 共有を追加する。共有用テキストを共通化するため `shareUtils.js` を新規作成する。

## 2. 変更対象ファイル

| ファイル | 操作 | 内容 |
|----------|------|------|
| `src/utils/shareUtils.js` | 新規作成 | 共有テキスト生成、LINE URL 生成 |
| `src/components/TypeDiagnose.jsx` | 変更 | shareUtils 使用、LINE 共有ボタン追加 |
| `src/App.css` | 変更 | LINE 共有ボタン用スタイル追加 |

## 3. shareUtils.js 仕様

### 3.1 共通テキスト形式

```
【100億円タイプ診断】私のタイプは「{name}」（{typeCode}）でした！
```

### 3.2 関数一覧

| 関数名 | 引数 | 戻り値 | 説明 |
|--------|------|--------|------|
| `getShareText(result)` | `{ name, typeCode }` | string | 共有用1行テキストを返す |
| `getXShareUrl(result)` | `{ name, typeCode }` | string | X Web Intent の URL |
| `getLineShareUrl(result)` | `{ name, typeCode }` | string | LINE share URL スキーム |

### 3.3 実装詳細

**getShareText**
```js
export function getShareText(result) {
  return `【100億円タイプ診断】私のタイプは「${result.name}」（${result.typeCode}）でした！`
}
```

**getXShareUrl**
- 既存の `handleShareToX` ロジックを移植
- `text`, `url`, `hashtags` を URLSearchParams で組み立て
- `https://twitter.com/intent/tweet?` + params

**getLineShareUrl**
- テキスト + スペース + 現在の URL を結合
- `https://line.me/R/share?text=` + encodeURIComponent(結合テキスト)
- 例: `【100億円タイプ診断】私のタイプは「堅実ビルダー型」（SLAP）でした！ https://...`

## 4. TypeDiagnose.jsx の変更

### 4.1 インポート追加

```js
import { getShareText, getXShareUrl, getLineShareUrl } from '../utils/shareUtils.js'
```

### 4.2 既存 handleShareToX の置き換え

```js
const handleShareToX = () => {
  if (!result) return
  window.open(getXShareUrl(result), '_blank', 'noopener,noreferrer,width=550,height=420')
}
```

### 4.3 handleShareToLINE 新規追加

```js
const handleShareToLINE = () => {
  if (!result) return
  const url = getLineShareUrl(result)
  window.open(url, '_blank', 'noopener,noreferrer')
}
```

### 4.4 ボタン配置

`result-actions` 内、「Xで共有」の直後に「LINEで共有」ボタンを追加:

```jsx
<button type="button" className="share-x-button" onClick={handleShareToX}>
  Xで共有
</button>
<button type="button" className="share-line-button" onClick={handleShareToLINE}>
  LINEで共有
</button>
```

## 5. App.css の変更

`.share-line-button` を追加。`.share-x-button` と同様のスタイルを適用し、視覚的に区別できるよう LINE 緑系のアクセントを検討可能（既存デザインに合わせて調整）。

## 6. 注意事項

- LINE URL スキーム (`line.me/R/share`) は **iOS / Android 版 LINE のみ** 対応。PC 版では動作しない。
- PC で開いた場合は LINE のダウンロードページに遷移する。

## 7. テスト項目

- [ ] 診断完了後、「LINEで共有」をクリックで LINE share URL が開く
- [ ] URL のクエリ `text=` にエンコード済みテキスト + URL が含まれる
- [ ] X 共有が従来通り動作する
- [ ] コピーボタンが従来通り動作する
