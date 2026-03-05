/**
 * 科学的根拠ページ用データ
 * new_references_page_design.md に基づく（調整版・5セクション構成）
 */

export const TOC_ITEMS = [
  { id: 'intro', label: 'この診断はどんな研究をもとにしているの？' },
  { id: 'four-axes', label: '4つの診断軸のもとになった考え方' },
  { id: 'references', label: '参考にした研究・本' },
  { id: 'disclaimer', label: '利用上の注意' },
]

/** 4軸の簡潔な説明（各2〜3行） */
export const FOUR_AXES = [
  {
    id: 'sr',
    label: 'S / R ── リスクへの向き合い方',
    description:
      '人間は「得をする喜び」よりも「損をする痛み」を約2倍強く感じる、という心理学の研究があります（プロスペクト理論）。この「損が怖い度合い」の個人差を測定するのがこの軸です。',
  },
  {
    id: 'ln',
    label: 'L / N ── 時間の使い方',
    description:
      '「今すぐ楽しみたい」か「将来のために貯めたい」か。この傾向は、お金の使い方の研究（MAS）で繰り返し確認されている、金融行動の重要な個人差のひとつです。',
  },
  {
    id: 'ai',
    label: 'A / I ── 決め方のスタイル',
    description:
      'カーネマンは、人間の思考には「速い直感的な判断」と「遅い論理的な判断」の2種類があると提唱しました。お金の使い道を決めるとき、どちらを重視するかがこの軸です。',
  },
  {
    id: 'pc',
    label: 'P / C ── お金を何のために使うか',
    description:
      'お金に対する無意識の価値観（マネースクリプト）を研究したクロンツらの研究では、「自分のために使う」傾向と「社会・他者のために使う」傾向が独立した軸として確認されています。',
  },
]

/** 論文3本（簡易形式） */
export const ACADEMIC_PAPERS = [
  {
    id: 1,
    study: 'Kahneman & Tversky「プロスペクト理論」(1979)',
    memo: '損失回避の実証。ノーベル経済学賞（2002年）受賞研究',
    url: 'https://www.jstor.org/stable/1914185',
    urlLabel: 'JSTOR',
  },
  {
    id: 2,
    study: 'Klontz et al.「マネースクリプト研究」(2011)',
    memo: 'お金に対する無意識の信念を4タイプに分類',
    url: 'https://caas.usu.edu/fcse/files/money-beliefs-and-financial-behaviors-development-the-klontz-money-script-inventory-jft-2011.pdf',
    urlLabel: 'PDF',
  },
  {
    id: 3,
    study: 'De Bortoli et al.「性格と投資行動の相関」(2019)',
    memo: '性格特性と金融行動の関係を実証（無料公開論文）',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/',
    urlLabel: 'PMC',
  },
]
