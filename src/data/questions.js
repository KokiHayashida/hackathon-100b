/**
 * 100億円タイプ診断 20問の質問定義
 * type: 'scale' = 5段階（1〜5）、type: 'allocation' = A/B/C/D 選択
 */
export const questions = [
  // リスク軸 Q1〜Q5
  {
    id: 1,
    text: '100億円のうち50億円を、成功すれば10倍になるが失敗すればゼロになる事業に投資する。',
    type: 'scale',
  },
  {
    id: 2,
    text: '100億円は安定資産に分散し、年間数％で確実に増やす方針にする。',
    type: 'scale',
    reverse: true,
  },
  {
    id: 3,
    text: '100億円を安定運用と成長投資にどう配分しますか？',
    type: 'allocation',
    options: [
      { value: 'A', label: '80億 安定運用 / 20億 成長投資', points: 0 },
      { value: 'B', label: '60億 安定 / 40億 成長', points: 1 },
      { value: 'C', label: '40億 安定 / 60億 成長', points: 3 },
      { value: 'D', label: '20億 安定 / 80億 成長', points: 5 },
    ],
  },
  {
    id: 4,
    text: '100億円で元本保証に近い方法以外は基本選ばない。',
    type: 'scale',
    reverse: true,
  },
  {
    id: 5,
    text: '100億円全額を一つの巨大プロジェクトに集中投資することに抵抗はない。',
    type: 'scale',
  },
  // 時間軸 Q6〜Q10
  {
    id: 6,
    text: '100億円の大半を20年以上かけて成果が出る事業に投資する。',
    type: 'scale',
    reverse: true,
  },
  {
    id: 7,
    text: '100億円のうち数十億円を、今すぐ豪華な体験（旅行・イベントなど）に使う。',
    type: 'scale',
  },
  {
    id: 8,
    text: '100億円を「長期で増やす」と「今すぐ使う」で分けるなら？',
    type: 'allocation',
    options: [
      { value: 'A', label: '90億 長期投資 / 10億 今使う', points: 0 },
      { value: 'B', label: '70億 長期 / 30億 今', points: 1 },
      { value: 'C', label: '50億 長期 / 50億 今', points: 3 },
      { value: 'D', label: '30億 長期 / 70億 今', points: 5 },
    ],
  },
  {
    id: 9,
    text: '今しかできない挑戦なら、100億円をすぐ動かす。',
    type: 'scale',
  },
  {
    id: 10,
    text: '100億円を使っても、将来の安定が見えないと不安になる。',
    type: 'scale',
    reverse: true,
  },
  // 判断軸 Q11〜Q15
  {
    id: 11,
    text: '100億円を使う前に専門家チームを雇い、徹底的に分析する。',
    type: 'scale',
    reverse: true,
  },
  {
    id: 12,
    text: '100億円の使い道は最終的に直感で決めたい。',
    type: 'scale',
  },
  {
    id: 13,
    text: '100億円の意思決定スタイルは？',
    type: 'allocation',
    options: [
      { value: 'A', label: 'ほぼデータと専門家で決める', points: 0 },
      { value: 'B', label: 'データ7割＋直感3割', points: 1 },
      { value: 'C', label: 'データ3割＋直感7割', points: 3 },
      { value: 'D', label: 'ほぼ直感', points: 5 },
    ],
  },
  {
    id: 14,
    text: 'ワクワクしない投資には100億円を出さない。',
    type: 'scale',
  },
  {
    id: 15,
    text: '100億円規模の意思決定では、感情より論理を優先する。',
    type: 'scale',
    reverse: true,
  },
  // 価値軸 Q16〜Q20
  {
    id: 16,
    text: 'まずは100億円で自分の理想の生活を完成させる。',
    type: 'scale',
    reverse: true,
  },
  {
    id: 17,
    text: '100億円のうち数十億円を社会問題解決（寄付・NPO・社会起業など）に使う。',
    type: 'scale',
  },
  {
    id: 18,
    text: '100億円の優先順位は？',
    type: 'allocation',
    options: [
      { value: 'A', label: '80億 自己実現 / 20億 社会貢献', points: 0 },
      { value: 'B', label: '60億 自己 / 40億 社会', points: 1 },
      { value: 'C', label: '40億 自己 / 60億 社会', points: 3 },
      { value: 'D', label: '20億 自己 / 80億 社会', points: 5 },
    ],
  },
  {
    id: 19,
    text: '自分の成功よりも、100億円で社会に影響を残したい。',
    type: 'scale',
  },
  {
    id: 20,
    text: '100億円は「自分の人生の質」を最大化するための道具だと思う。',
    type: 'scale',
    reverse: true,
  },
]
