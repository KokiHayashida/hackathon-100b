# タイプ一覧の目次・色分け・クリック遷移 実装計画書

## 概要

「タイプ一覧」ページ（`TypeIntroduction` コンポーネント）の以下の3点を実装するための計画。

1. **イメージ画像の追加**：目次に各タイプのイメージ画像を表示
2. **4グループ別の色分け**：安定構築・成長加速・社会共鳴・自己実現をそれぞれ異なる色で区別（目次 + 診断タイプ詳細紹介）
3. **クリックで詳細へ遷移**：イメージ画像またはタイプ名クリックで、それぞれの詳細セクションへスクロール

---

## 1. イメージ画像の追加

### 1.1 画像の配置

- **配置先**：`public/images/types/`
- **ファイル命名規則**：`{TYPE_CODE}_0.png`（例：SLAP_0.png, RLAC_0.png）
- **必要画像**：16タイプ分

| 安定構築 | 成長加速 | 社会共鳴 | 自己実現 |
|----------|----------|----------|----------|
| SLAP_0.png | RLAP_0.png | SNIC_0.png | SNIP_0.png |
| SLAC_0.png | RLAC_0.png | RNIC_0.png | SNAP_0.png |
| SLIP_0.png | RLIP_0.png | RNAC_0.png | RNAP_0.png |
| SLIC_0.png | RLIC_0.png | SNAC_0.png | RNIP_0.png |

※ 既存の `src/utils/typeImagePath.js` の `getTypeImagePath(typeCode)` を利用可能。  
→ `${base}images/types/${typeCode}_0.png` を返す。

### 1.2 目次への画像表示

- **対象コンポーネント**：`src/components/TypeIntroduction.jsx`
- **変更箇所**：`.type-intro-toc-links` 内の各 `<li>`

**現状構造（抜粋）：**
```jsx
<li key={code}>
  <a href={`#type-${code}`} className="type-intro-toc-link">
    {code} {data.name}
  </a>
</li>
```

**変更後：**
- 各リンク内にサムネイル画像を追加
- レイアウト：画像 + タイプ名を横並び（または画像上・名前下）

```jsx
<li key={code}>
  <a href={`#type-${code}`} className={`type-intro-toc-link type-intro-toc-link--${group.id}`}>
    <img src={getTypeImagePath(code)} alt="" className="type-intro-toc-image" />
    <span>{code} {data.name}</span>
  </a>
</li>
```

### 1.3 CSS 追加

- `.type-intro-toc-link`：`display: flex` で画像とテキストを並べる
- `.type-intro-toc-image`：サムネイルサイズ（例：32px × 32px または 40px × 40px）、`border-radius` で角丸
- 画像が存在しない場合のフォールバック（`object-fit: cover`、背景色指定など）

---

## 2. 4グループ別の色分け

### 2.1 色の割り当て（案）

| グループ | 提案色 | CSS変数 | 備考 |
|----------|--------|---------|------|
| 安定構築 | ティール/青緑 | `var(--teal)` | 落ち着いた・堅実な印象 |
| 成長加速 | オレンジ | `var(--orange)` | エネルギッシュ・成長感 |
| 社会共鳴 | 紫 | `var(--purple)` | つながり・共感 |
| 自己実現 | エメラルド/緑 | `var(--emerald)` | 自由・体験・人生 |

※ 既存の `App.css` で定義済みの変数を利用。必要に応じて調整可能。

### 2.2 データ側の変更

**`src/data/groupInfo.js`**

- 各グループに `colorClass` を追加し、目次・詳細セクションで共通利用

```js
export const GROUP_INFO = [
  { id: 'stable', name: '安定構築', colorClass: 'group--stable', ... },
  { id: 'growth', name: '成長加速', colorClass: 'group--growth', ... },
  { id: 'social', name: '社会共鳴', colorClass: 'group--social', ... },
  { id: 'self', name: '自己実現', colorClass: 'group--self', ... },
]
```

### 2.3 目次の色分け

- `.type-intro-toc-group` または `.type-intro-toc-link` にグループ別クラスを付与
- リンク文字色・ホバー色・画像のボーダー色などをグループごとに変更

**CSS 例：**
```css
.type-intro-toc-link--stable { color: var(--teal); }
.type-intro-toc-link--stable:hover { color: var(--teal); opacity: 0.9; }

.type-intro-toc-link--growth { color: var(--orange); }
.type-intro-toc-link--growth:hover { color: var(--orange); opacity: 0.9; }

.type-intro-toc-link--social { color: var(--purple); }
.type-intro-toc-link--social:hover { color: var(--purple); opacity: 0.9; }

.type-intro-toc-link--self { color: var(--emerald); }
.type-intro-toc-link--self:hover { color: var(--emerald); opacity: 0.9; }
```

### 2.4 診断タイプ詳細紹介の色分け

**現状**：各タイプに `TYPE_PROFILES[typeCode].colorClass`（例：`result--teal`, `result--blue`）が割り当てられ、個別に色が設定されている。

**変更方針**：  
4グループに合わせて色を統一するため、`groupInfo` の `typeCodes` から逆引きしてグループを特定し、そのグループの `colorClass` を適用する。

- `typeCode` → 所属グループを取得するヘルパー関数を追加  
  （例：`getGroupByTypeCode(code)`）
- `type-intro-section` のクラスを `group--stable` などに変更

**`src/utils/groupByType.js`（新規）の例：**
```js
import { GROUP_INFO } from '../data/groupInfo'

export function getGroupByTypeCode(typeCode) {
  return GROUP_INFO.find(g => g.typeCodes.includes(typeCode)) ?? null
}
```

**TypeIntroduction.jsx の変更：**
```jsx
const group = getGroupByTypeCode(type.typeCode)
const groupColorClass = group?.colorClass ?? 'result--teal'

<article
  className={`type-intro-section ${groupColorClass}`}
  ...
>
```

**App.css の追加：**
```css
.type-intro-section.group--stable { border-left-color: var(--teal); }
.type-intro-section.group--stable .type-intro-quote { border-left-color: var(--teal); }

.type-intro-section.group--growth { border-left-color: var(--orange); }
.type-intro-section.group--growth .type-intro-quote { border-left-color: var(--orange); }

.type-intro-section.group--social { border-left-color: var(--purple); }
.type-intro-section.group--social .type-intro-quote { border-left-color: var(--purple); }

.type-intro-section.group--self { border-left-color: var(--emerald); }
.type-intro-section.group--self .type-intro-quote { border-left-color: var(--emerald); }
```

※ 既存の `result--teal` 等は互換性のため残し、目次・詳細は `group--*` を優先して利用する形でも可。

---

## 3. クリックで詳細へ遷移

### 3.1 現状

- 目次のタイプ名は `<a href="#type-${code}">` で詳細セクション（`id="type-{code}"`）へアンカーリンク済み
- `scroll-behavior: smooth` によりスムーズスクロールが有効

### 3.2 対応内容

- リンク内に画像を入れるため、**画像もクリック可能**な構造にする
- `<a>` タグで画像とテキストの両方を包む

```jsx
<a href={`#type-${code}`} className={`type-intro-toc-link type-intro-toc-link--${group.id}`}>
  <img src={getTypeImagePath(code)} alt="" className="type-intro-toc-image" />
  <span>{code} {data.name}</span>
</a>
```

- `cursor: pointer`、適切な `:focus` スタイルを付与してアクセシビリティを確保

---

## 4. 実装手順（タスク一覧）

| # | タスク | 担当ファイル |
|---|--------|-------------|
| 1 | `public/images/types/` に16タイプ分の画像を配置 | （手動または画像用意） |
| 2 | `groupInfo.js` に各グループの `colorClass` を追加 | `src/data/groupInfo.js` |
| 3 | `getGroupByTypeCode` ヘルパーを作成 | `src/utils/groupByType.js`（新規） |
| 4 | 目次に画像を追加し、リンクにグループ用クラスを付与 | `TypeIntroduction.jsx` |
| 5 | 目次のグループ別色分け CSS を追加 | `App.css` |
| 6 | 詳細セクションにグループ別クラスを適用 | `TypeIntroduction.jsx` |
| 7 | 詳細セクションのグループ別色分け CSS を追加 | `App.css` |
| 8 | 目次の画像・リンクのレイアウト・ホバー調整 | `App.css` |

---

## 5. 注意事項

- **画像のフォールバック**：`/images/types/` に画像がない場合、代替表示（プレースホルダーや `alt` テキスト）を検討
- **既存の `colorClass`**：`TYPE_PROFILES` の `colorClass` は診断結果ページ等で使用されているため、グループ色と競合しないよう役割を分離
- **アクセシビリティ**：画像の `alt` は装飾的であれば空文字 `""` で可。リンクに十分なタップ領域を確保

---

## 6. 関連ファイル一覧

| ファイル | 役割 |
|----------|------|
| `src/components/TypeIntroduction.jsx` | 目次・詳細セクションの表示 |
| `src/data/groupInfo.js` | 4グループ定義 |
| `src/data/typeProfiles.js` | 各タイプのプロフィール（既存 colorClass あり） |
| `src/utils/typeImagePath.js` | 画像パス生成 |
| `src/App.css` | スタイル定義 |
| `public/images/types/` | タイプ別イメージ画像 |

---

## 7. 完成イメージ（目次セクション）

- 各グループの見出し下に、サムネイル画像 + タイプ名のリンクが並ぶ
- 安定構築：ティール系、成長加速：オレンジ系、社会共鳴：紫系、自己実現：緑系で色分け
- 画像・テキストのどちらをクリックしても、該当タイプの詳細セクションへスムーズスクロール
