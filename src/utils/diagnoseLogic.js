/**
 * 100億円タイプ診断 スコア計算・タイプ判定
 * financial_type_logic.md に基づく
 */

const ALLOC_POINTS = { A: 0, B: 1, C: 3, D: 5 }

function getScaleScore(value, reverse = false) {
  const n = Number(value) || 0
  if (n < 1 || n > 5) return 0
  return reverse ? 6 - n : n
}

function getAllocScore(value) {
  const v = (value || '').toUpperCase()
  return ALLOC_POINTS[v] ?? 0
}

/**
 * 回答から4軸のスコアを計算
 * @param {Object} answers - 質問idをキー、回答値をバリューとするオブジェクト
 *   - scale: 1〜5
 *   - allocation: 'A'|'B'|'C'|'D'
 */
export function calculateScores(answers) {
  const q = (id) => answers[id]
  const scale = (id, reverse = false) => getScaleScore(q(id), reverse)
  const alloc = (id) => getAllocScore(q(id))

  const RiskScore = scale(1) + scale(2, true) + alloc(3) + scale(4, true) + scale(5)
  const TimeScore = scale(6, true) + scale(7) + alloc(8) + scale(9) + scale(10, true)
  const DecisionScore = scale(11, true) + scale(12) + alloc(13) + scale(14) + scale(15, true)
  const ValueScore = scale(16, true) + scale(17) + alloc(18) + scale(19) + scale(20, true)

  return { RiskScore, TimeScore, DecisionScore, ValueScore }
}

/**
 * スコアから4文字コード（FPTI）を生成
 * 0〜12点 → 左極、13〜25点 → 右極
 */
export function getTypeCode(scores) {
  const r = scores.RiskScore >= 13 ? 'R' : 'S'
  const t = scores.TimeScore >= 13 ? 'N' : 'L'
  const d = scores.DecisionScore >= 13 ? 'I' : 'A'
  const v = scores.ValueScore >= 13 ? 'C' : 'P'
  return r + t + d + v
}
