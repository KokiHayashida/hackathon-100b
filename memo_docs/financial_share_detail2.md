# フェーズ2 詳細計画：共有用画像の生成

## 1. 概要

診断結果をタイプ画像 + テキストで合成した PNG 画像としてダウンロードできるようにする。さらに Web Share API により、モバイルで OS の共有シートから Instagram 等への共有を可能にする。

## 2. 変更対象ファイル

| ファイル | 操作 | 内容 |
|----------|------|------|
| `package.json` | 変更 | `html-to-image` を追加 |
| `src/utils/compositeImageUtils.js` | 新規作成 | コンポジット画像生成 |
| `src/components/TypeDiagnose.jsx` | 変更 | 画像DL・Web Share ボタン追加 |
| `src/App.css` | 変更 | 新ボタン用スタイル |

## 3. 依存ライブラリ

### html-to-image

```bash
npm install html-to-image
```

- DOM を PNG/Blob に変換
- `toBlob`, `toPng` 等を提供
- 軽量で Canvas 描画の代替として利用

## 4. コンポジット画像の設計

### 4.1 サイズ・レイアウト

- **出力サイズ**: 800 x 800 px（Instagram 正方形に最適）
- **構成**:
  - 背景: ダークテーマに合わせたグラデーション（#1a1a2e → #16213e）
  - 上部: タイプ画像（中央、max 400x400、アスペクト比維持）
  - 下部: テキストブロック
    - 「100億円タイプ診断」
    - 「{typeCode} {name}」
    - 引用（quote、1行に収めるため長い場合は省略）

### 4.2 データ取得

- タイプ画像: `getTypeImagePath(typeCode)` で取得
- 引用: `TYPE_INTRODUCTION_DATA` から `typeCode` で検索して `quote` を取得

### 4.3 実装方式

**方式A: html-to-image で DOM を画像化**
- 非表示の div を作成し、画像・テキストを配置
- `toBlob` で PNG を取得
- CORS: `public/` 内の画像は同一オリジンなので問題なし

**方式B: Canvas API で直接描画**
- 画像を `new Image()` でロード
- Canvas に描画後、`toBlob('image/png')` で取得
- より軽量だがレイアウト調整の実装コストが高い

**採用**: 方式A（html-to-image + 非表示 DOM）。レイアウト調整が容易。

## 5. compositeImageUtils.js 仕様

### 5.1 関数

| 関数名 | 引数 | 戻り値 | 説明 |
|--------|------|--------|------|
| `generateCompositeImageBlob(result, quote)` | `result`, `quote` | `Promise<Blob>` | コンポジット PNG の Blob を返す |

### 5.2 処理フロー

1. 一時用の div を document.body に追加（画面外 or visibility:hidden）
2. 内部に画像 img、テキスト用の p 要素を配置
3. `html-to-image` の `toBlob` で div を PNG 化
4. div を削除
5. Blob を返す

### 5.3 レイアウト用スタイル

インラインスタイルまたは style 属性で指定:

- コンテナ: 800x800、背景グラデーション、flex で中央寄せ
- 画像: max-width/height 400px
- テキスト: フォントサイズ適宜、色は白系

## 6. TypeDiagnose.jsx の変更

### 6.1 インポート追加

```js
import { generateCompositeImageBlob } from '../utils/compositeImageUtils.js'
import { TYPE_INTRODUCTION_DATA } from '../data/typeIntroduceData.js'
```

### 6.2 状態・関数追加

**handleDownloadImage**

```js
const handleDownloadImage = async () => {
  if (!result) return
  const intro = TYPE_INTRODUCTION_DATA.find((t) => t.typeCode === result.typeCode)
  const quote = intro?.quote ?? ''
  const blob = await generateCompositeImageBlob(result, quote)
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `100億円タイプ診断_${result.typeCode}.png`
  a.click()
  URL.revokeObjectURL(url)
}
```

**handleWebShare**

```js
const handleWebShare = async () => {
  if (!result) return
  const intro = TYPE_INTRODUCTION_DATA.find((t) => t.typeCode === result.typeCode)
  const quote = intro?.quote ?? ''
  const blob = await generateCompositeImageBlob(result, quote)
  const file = new File([blob], `100億円タイプ_${result.typeCode}.png`, { type: 'image/png' })
  const shareText = getShareText(result)
  const shareData = { files: [file], text: shareText, url: window.location.href }
  if (navigator.canShare && navigator.canShare(shareData)) {
    await navigator.share(shareData)
  } else {
    handleDownloadImage()
  }
}
```

### 6.3 ボタン配置

`result-actions` 内に追加:

```jsx
<button type="button" className="share-download-button" onClick={handleDownloadImage}>
  画像をダウンロード
</button>
<button type="button" className="share-sns-button" onClick={handleWebShare}>
  SNSで共有
</button>
```

## 7. App.css の変更

`.share-download-button`, `.share-sns-button` を追加。既存の `.share-x-button` と同系のスタイルで統一。

## 8. フォールバック

- Web Share API 非対応時（デスクトップ Chrome など）: `navigator.canShare` が false の場合、`handleDownloadImage` を実行してダウンロードさせる。

## 9. 注意事項

- `public/images/types/` に 16 タイプ分の PNG 画像が存在すること前提
- 画像が存在しない場合は代替表示（エラーやプレースホルダー）を検討

## 10. テスト項目

- [ ] 「画像をダウンロード」で PNG がダウンロードされる
- [ ] 画像にタイプ名・コード・引用が含まれる
- [ ] モバイルで「SNSで共有」を押すと共有シートが表示される
- [ ] デスクトップでは「SNSで共有」押下でダウンロードにフォールバックする
