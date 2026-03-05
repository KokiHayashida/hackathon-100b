/**
 * 16タイプの相性データ（financial_combination.md より）
 * 各タイプの最高相性・最悪相性（4文字コードと名前）
 */
export const TYPE_COMBINATION = {
  SLAP: {
    best: { code: 'RLIP', name: 'ベンチャープロデューサー型' },
    worst: { code: 'SNIP', name: '体験クリエイター型' },
  },
  SLAC: {
    best: { code: 'RLAC', name: '変革リーダー型' },
    worst: { code: 'RNIP', name: 'ダイナミック実行者型' },
  },
  SLIP: {
    best: { code: 'SNAC', name: 'ライフスタイル重視型' },
    worst: { code: 'RNAP', name: 'ハイリスク探求型' },
  },
  SLIC: {
    best: { code: 'SNIC', name: 'コミュニティ設計者型' },
    worst: { code: 'RNIC', name: 'コミュニティ革命家型' },
  },
  RLAP: {
    best: { code: 'RNAP', name: 'ハイリスク探求型' },
    worst: { code: 'SLIC', name: 'バランス経営者型' },
  },
  RLIP: {
    best: { code: 'SLAP', name: '堅実ビルダー型' },
    worst: { code: 'SLIP', name: '品質追求型' },
  },
  RLIC: {
    best: { code: 'RNIC', name: 'コミュニティ革命家型' },
    worst: { code: 'SLAC', name: 'ストラテジスト型' },
  },
  RLAC: {
    best: { code: 'SLAC', name: 'ストラテジスト型' },
    worst: { code: 'SNIP', name: '体験クリエイター型' },
  },
  SNIC: {
    best: { code: 'SLIC', name: 'バランス経営者型' },
    worst: { code: 'RNAC', name: 'トレンドメーカー型' },
  },
  RNIC: {
    best: { code: 'RLIC', name: 'ネットワーク構築型' },
    worst: { code: 'SNAP', name: 'マイペース愛好家型' },
  },
  RNAC: {
    best: { code: 'RNIP', name: 'ダイナミック実行者型' },
    worst: { code: 'SNIC', name: 'コミュニティ設計者型' },
  },
  SNAC: {
    best: { code: 'SLIP', name: '品質追求型' },
    worst: { code: 'RNAP', name: 'ハイリスク探求型' },
  },
  SNIP: {
    best: { code: 'RNIP', name: 'ダイナミック実行者型' },
    worst: { code: 'RLAC', name: '変革リーダー型' },
  },
  SNAP: {
    best: { code: 'SNIP', name: '体験クリエイター型' },
    worst: { code: 'RNIC', name: 'コミュニティ革命家型' },
  },
  RNAP: {
    best: { code: 'RLAP', name: 'グローバル冒険家型' },
    worst: { code: 'SLIP', name: '品質追求型' },
  },
  RNIP: {
    best: { code: 'SNIP', name: '体験クリエイター型' },
    worst: { code: 'SLAP', name: '堅実ビルダー型' },
  },
}
