# 100億円タイプ診断 スコアリング＆タイプ判定ロジック

4軸 × 各5問＝20問から4文字コード（FPTI）を算出し、16タイプのいずれかに判定するアルゴリズムの仕様書です。実装にそのまま利用できる形式でまとめています。

---

## 基本構造

| 軸 | 左極 | 右極 | スコア変数 | 満点 |
|----|------|------|------------|------|
| 第1軸 | S（安定） | R（挑戦） | RiskScore | 25 |
| 第2軸 | L（長期） | N（現在） | TimeScore | 25 |
| 第3軸 | A（分析） | I（直感） | DecisionScore | 25 |
| 第4軸 | P（自己） | C（社会） | ValueScore | 25 |

- 各軸のスコアは **右極（R, N, I, C）方向** にカウントする
- 0〜12点 → 左極
- 13〜25点 → 右極

---

## 各軸のスコア計算式

### リスク軸（RiskScore）

```
RiskScore = Q1 + (6 - Q2) + Q3 + (6 - Q4) + Q5
```

| 質問 | 加算内容 | 備考 |
|------|----------|------|
| Q1 | 回答値 1〜5 | 50億ハイリスク投資への同意度 |
| Q2 | 6 − 回答値 | 逆転：安定分散への同意度高＝R 低 |
| Q3 | 0 or 1 or 3 or 5 | 分配：A=0, B=1, C=3, D=5 |
| Q4 | 6 − 回答値 | 逆転：元本保証重視＝R 低 |
| Q5 | 回答値 1〜5 | 全額集中投資への同意度 |

### 時間軸（TimeScore）

```
TimeScore = (6 - Q6) + Q7 + Q8 + Q9 + (6 - Q10)
```

| 質問 | 加算内容 | 備考 |
|------|----------|------|
| Q6 | 6 − 回答値 | 逆転：長期投資志向＝N 低 |
| Q7 | 回答値 1〜5 | 今すぐ豪華体験への同意度 |
| Q8 | 0 or 1 or 3 or 5 | 分配：A=0, B=1, C=3, D=5 |
| Q9 | 回答値 1〜5 | 今しかない挑戦なら即動かす |
| Q10 | 6 − 回答値 | 逆転：将来不安重視＝N 低 |

### 判断軸（DecisionScore）

```
DecisionScore = (6 - Q11) + Q12 + Q13 + Q14 + (6 - Q15)
```

| 質問 | 加算内容 | 備考 |
|------|----------|------|
| Q11 | 6 − 回答値 | 逆転：専門家分析重視＝I 低 |
| Q12 | 回答値 1〜5 | 直感で決めたい |
| Q13 | 0 or 1 or 3 or 5 | 分配：A=0, B=1, C=3, D=5 |
| Q14 | 回答値 1〜5 | ワクワク重視 |
| Q15 | 6 − 回答値 | 逆転：論理優先＝I 低 |

### 価値軸（ValueScore）

```
ValueScore = (6 - Q16) + Q17 + Q18 + Q19 + (6 - Q20)
```

| 質問 | 加算内容 | 備考 |
|------|----------|------|
| Q16 | 6 − 回答値 | 逆転：自己実現優先＝C 低 |
| Q17 | 回答値 1〜5 | 社会貢献への同意度 |
| Q18 | 0 or 1 or 3 or 5 | 分配：A=0, B=1, C=3, D=5 |
| Q19 | 回答値 1〜5 | 社会に影響を残したい |
| Q20 | 6 − 回答値 | 逆転：人生の質最大化＝C 低 |

---

## 4文字コード生成

各軸スコアを 0〜12 → 左、13〜25 → 右 で判定し、4文字を連結する。

```
risk      = (RiskScore >= 13) ? "R" : "S"
time      = (TimeScore >= 13) ? "N" : "L"
decision  = (DecisionScore >= 13) ? "I" : "A"
value     = (ValueScore >= 13) ? "C" : "P"

typeCode = risk + time + decision + value
```

例：`RiskScore=18, TimeScore=9, DecisionScore=16, ValueScore=6`  
→ `RLIP`（ベンチャープロデューサー型）

---

## 16タイプコードとタイプ名の対応

| コード | タイプ名 |
|--------|----------|
| SLAP | 堅実ビルダー型 |
| SLAC | ストラテジスト型 |
| SLIP | 品質追求型 |
| SLIC | バランス経営者型 |
| SNAP | マイペース愛好家型 |
| SNAC | ライフスタイル重視型 |
| SNIP | 体験クリエイター型 |
| SNIC | コミュニティ設計者型 |
| RLAP | グローバル冒険家型 |
| RLAC | 変革リーダー型 |
| RLIP | ベンチャープロデューサー型 |
| RLIC | ネットワーク構築型 |
| RNAP | ハイリスク探求型 |
| RNAC | トレンドメーカー型 |
| RNIP | ダイナミック実行者型 |
| RNIC | コミュニティ革命家型 |

---

## 境界値の扱い（オプション）

スコアが 12 または 13 付近の場合、「やや R 型」などグラデーション表示をしたい場合の例：

```javascript
// 境界付近かどうかの判定
const isNearBoundary = (score) => Math.abs(score - 12.5) <= 1

// サブラベル表示例
// score: 12 → "ややS型"、13 → "ややR型" など
```

- 極端な二値分類を避けられる
- レーダーチャートで「中間」を示しやすい
- 実装は任意

---

## レーダーチャート用の正規化

0〜25点を 0〜100% に変換する例：

```
normalized = (score / 25) * 100
```

レーダーチャートの軸ごとに、この正規化スコアをプロットする。

---

## 擬似コード（実装例）

```javascript
function calculateScores(answers) {
  const q = (id) => answers[id] ?? 0
  const rev = (v) => 6 - (Number(v) || 0)
  const alloc = (v) => ({ A: 0, B: 1, C: 3, D: 5 }[v] ?? 0)

  const RiskScore = q(1) + rev(q(2)) + alloc(q(3)) + rev(q(4)) + q(5)
  const TimeScore = rev(q(6)) + q(7) + alloc(q(8)) + q(9) + rev(q(10))
  const DecisionScore = rev(q(11)) + q(12) + alloc(q(13)) + q(14) + rev(q(15))
  const ValueScore = rev(q(16)) + q(17) + alloc(q(18)) + q(19) + rev(q(20))

  return { RiskScore, TimeScore, DecisionScore, ValueScore }
}

function getTypeCode(scores) {
  const r = scores.RiskScore >= 13 ? "R" : "S"
  const t = scores.TimeScore >= 13 ? "N" : "L"
  const d = scores.DecisionScore >= 13 ? "I" : "A"
  const v = scores.ValueScore >= 13 ? "C" : "P"
  return r + t + d + v
}

function diagnose(answers) {
  const scores = calculateScores(answers)
  const typeCode = getTypeCode(scores)
  const typeName = TYPE_NAMES[typeCode]  // 16タイプの名前マップ
  return { scores, typeCode, typeName }
}
```

---

## 注意事項

1. **回答値の範囲**：5段階は 1〜5 を想定。0 や未入力のときは 0 として扱うか、必須チェックを推奨。
2. **分配選択肢**：`A`, `B`, `C`, `D` の文字列で保存し、`alloc` で 0/1/3/5 に変換。
3. **逆転項目**：`6 - value` により、1→5, 5→1 に反転。値が 0 のときは 6 にならないよう、未回答は 0 扱いで `rev(0)=6` とするか、未回答を除外する設計を検討。
4. **プロファイル参照**：`financial_type_profiles.md` のタイプ名・特徴・長所・短所を、`typeCode` をキーにして取得する。
