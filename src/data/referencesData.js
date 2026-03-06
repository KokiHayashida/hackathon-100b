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
      '性格特性が「将来の計画」と「今の変化」のどちらを優先するかに関係している、というDe Bortoliら（2019）の研究があります。長期的な安定を見据えるか、現在の多様な経験を重視するかという、時間の捉え方の違いを測定します。',
  },
  {
    id: 'ai',
    label: 'A / I ── 決め方のスタイル',
    description:
      '直感的な判断をどれだけ論理的に修正できるかを分析した、De Bortoliら（2019）の研究があります。最新の投資行動の研究でも使われる指標をもとに、感情や直感で動くか、データをもとに分析して動くかというスタイルの違いを測定します。',
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
