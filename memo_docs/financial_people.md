# 診断人数表示機能 実装計画書

## 1. 概要

ホーム画面に「今まで診断した人数」を表示し、人気や信頼感を高める。数値は仮で実装し、後から変更可能な設計とする。

---

## 2. 表示例

- **12,438人が診断**
- すでに **12,438人が診断しています**

---

## 3. 表示場所

ホーム画面（`selectedView === 'home'`）の `home-hero` 内に配置。
診断を始めるボタンの下
---

## 4. 変更対象ファイル

| ファイル | 操作 | 内容 |
|----------|------|------|
| `src/utils/diagnosisCount.js` | 新規作成 | 診断人数の取得・表示用ユーティリティ |
| `src/App.jsx` | 変更 | ホーム画面に診断人数表示を追加 |
| `src/App.css` | 変更 | 診断人数表示用スタイル |

---

## 5. データ設計

### 5.1 初期値（仮）

```
DIAGNOSIS_COUNT = 12438
```

- 数値は定数として定義し、将来的に API や環境変数に差し替え可能にする。
- 日本表記のカンマ区切り（12,438）で表示。

### 5.2 将来の拡張（オプション）

- バックエンド API から人数を取得
- 環境変数（`VITE_DIAGNOSIS_COUNT` など）で上書き
- Firebase などでリアルタイムカウントを管理

---

## 6. 実装仕様

### 6.1 diagnosisCount.js

```js
/** 診断人数（仮・後で変更可能） */
export const DIAGNOSIS_COUNT = 12438

/**
 * 診断人数をカンマ区切りで整形
 * @param {number} n
 * @returns {string}
 */
export function formatDiagnosisCount(n) {
  return n.toLocaleString('ja-JP')
}
```

### 6.2 表示文言

| パターン | 文言 |
|----------|------|
| シンプル | **12,438人**が診断 |
| 丁寧 | すでに **12,438人**が診断しています |

どちらか一方、または切り替え可能にする。

### 6.3 App.jsx の変更

`home-hero` 内、ボタンの直前に追加例：

```jsx
<p className="home-hero-count">
  すでに <strong>{formatDiagnosisCount(DIAGNOSIS_COUNT)}人</strong>が診断しています
</p>
```

### 6.4 CSS スタイル

- `.home-hero-count`: 小さめフォント、`color: var(--text-muted)` で補足テキスト風
- `strong`: 人数部分を強調（`color: var(--accent)` または `var(--text-primary)`）

---

## 7. 実装手順

1. `src/utils/diagnosisCount.js` を新規作成し、`DIAGNOSIS_COUNT` と `formatDiagnosisCount` を定義
2. `App.jsx` で `diagnosisCount` をインポートし、`home-hero` 内に表示要素を追加
3. `App.css` に `.home-hero-count` のスタイルを追加
4. 表示文言・位置を実機で確認し、必要に応じて調整

---

## 8. テスト観点

- [ ] ホーム画面で診断人数が表示される
- [ ] 数値がカンマ区切り（12,438）で表示される
- [ ] レスポンシブ時もレイアウトが崩れない
- [ ] `DIAGNOSIS_COUNT` を変更したとき、表示が更新される

---

## 9. 参考

- [Number.prototype.toLocaleString() - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)
- 日本語のカンマ区切りは `toLocaleString('ja-JP')` で取得可能
