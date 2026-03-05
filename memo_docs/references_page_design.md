# 参考文献紹介ページ 詳細設計ドキュメント

**対象ブランチ：** `plan_start`  
**ファイル配置案：** `src/components/References.jsx`  
**ナビゲーション追加：** `App.jsx` の `nav-tabs` に「科学的根拠」タブを追加  
**作成日：** 2026年3月5日  
**URL検証日：** 2026年3月5日（全リンクの存在を確認済み）

---

## 1. ページの目的と設計方針

本ページは、100億円タイプ診断（FPTI）が「エンタメとして楽しいだけでなく、行動ファイナンス・金融心理学の学術的知見に基づいて設計されている」ことをユーザーに示すための**科学的根拠紹介ページ**である。

設計において重視する3つの方針は以下の通りである。

**方針1：信頼性の可視化**  
診断の4軸（S/R・L/N・A/I・P/C）それぞれが、どの学術理論・論文に基づいているかを明示する。ユーザーが「なぜこの質問をされるのか」「この結果はどういう意味か」を理解できるようにする。

**方針2：読みやすさの優先**  
学術的な内容を、専門知識のない一般ユーザーにも理解できる平易な言葉で説明する。難解な用語には補足説明を付ける。

**方針3：実装の軽量性**  
静的なコンテンツページとして実装し、外部APIや動的データは使用しない。`react-markdown` は既に依存関係に含まれているため、Markdownレンダリングを活用できる。

---

## 2. ページ構成（セクション一覧）

ページは以下の7セクションで構成する。

| # | セクションID | セクション名 | 概要 |
|---|---|---|---|
| 1 | `intro` | この診断について | 診断の概要・FPTIとは何かの説明 |
| 2 | `four-axes` | 4つの診断軸の科学的根拠 | 各軸（S/R・L/N・A/I・P/C）の理論的背景 |
| 3 | `theories` | 参照した主要理論・モデル | BIT・KMSI・MAS・Big Fiveの概要 |
| 4 | `biases` | 診断に組み込まれた心理バイアス | 12の認知・感情バイアスの説明 |
| 5 | `references` | 参考文献一覧 | 学術論文・書籍・尺度の一覧 |
| 6 | `websites` | 参考ウェブサイト一覧 | 存在確認済みのウェブサイトリンク集 |
| 7 | `disclaimer` | 免責事項・利用上の注意 | 診断の限界と適切な利用方法 |

---

## 3. 各セクションの詳細コンテンツ

### セクション1：この診断について

**見出し：** 「100億円タイプ診断（FPTI）とは」

**本文：**

> 100億円タイプ診断（FPTI：Financial Personality Type Indicator）は、「もし100億円を手にしたら、あなたはどう使うか？」という仮想シナリオを通じて、個人の金融心理・価値観・意思決定スタイルを明らかにする性格診断です。

本診断は、**行動ファイナンス（Behavioral Finance）** および **金融心理学（Financial Psychology）** の学術的知見をもとに設計されています。これらは、「人間はお金に関する意思決定において、必ずしも合理的には行動しない」という事実を科学的に研究する学問分野です。

2002年にノーベル経済学賞を受賞した心理学者ダニエル・カーネマン（Daniel Kahneman）らの研究に端を発するこの分野は、現在では世界中の大学・金融機関・心理療法の現場で活用されています。

**FPTIの特徴を示す比較表：**

| 項目 | FPTI（本診断） | 一般的な性格診断 |
|---|---|---|
| **理論的基盤** | 行動ファイナンス・金融心理学 | 性格心理学（Big Five等） |
| **測定対象** | 金融行動・価値観・リスク態度 | 一般的な性格特性 |
| **質問形式** | 100億円シナリオ（仮想行動選択） | 日常行動・感情の自己評価 |
| **タイプ数** | 16タイプ（4軸 × 2値） | 4〜16タイプ（モデルによる） |
| **参照モデル** | BIT・KMSI・MAS・Big Five | MBTI・Big Five等 |

---

### セクション2：4つの診断軸の科学的根拠

**見出し：** 「4つの軸はどこから来たのか」

**リード文：**

本診断は、回答を4つの独立した軸でスコアリングし、その組み合わせから16タイプを判定します。各軸は、行動ファイナンス・金融心理学の研究で繰り返し確認されてきた「金融行動を左右する主要な心理的次元」に対応しています。

---

#### 軸1：リスク態度（S ← → R）
**安定志向（Stability）↔ 挑戦志向（Risk）**

| 項目 | 内容 |
|---|---|
| **測定内容** | 不確実性・損失の可能性に対する許容度 |
| **理論的根拠** | プロスペクト理論（Kahneman & Tversky, 1979）、BIT（Pompian, 2012） |
| **関連バイアス** | 損失回避（Loss Aversion）、現状維持バイアス（Status Quo Bias） |
| **参照尺度** | GL-RTS（Grable & Lytton, 1999）、BIT診断 |

**解説：**  
カーネマンとトベルスキーの**プロスペクト理論**は、人間が「同額の利益を得る喜び」よりも「同額の損失を被る苦痛」を約2倍強く感じることを実証しました。この「損失回避」の強さは個人差が大きく、金融行動の最も重要な予測因子の一つとされています。本診断のリスク軸（S/R）は、この損失回避の強度と、リスクへの積極性を測定します。

---

#### 軸2：時間志向（L ← → N）
**長期志向（Long-term）↔ 現在志向（Now）**

| 項目 | 内容 |
|---|---|
| **測定内容** | 将来の報酬より現在の消費を優先する傾向（時間割引率） |
| **理論的根拠** | MAS・Retention-Time次元（Yamauchi & Templer, 1982）、Big Five・誠実性との相関 |
| **関連バイアス** | 現在バイアス（Present Bias）、双曲割引（Hyperbolic Discounting） |
| **参照尺度** | MAS（Money Attitude Scale）、Big Five誠実性尺度 |

**解説：**  
行動経済学では、人間が将来の報酬を過度に割り引いて評価する「**現在バイアス**」が広く確認されています。ヤマウチとテンプラーが開発したMASの「保持・時間（Retention-Time）」次元は、将来に備えた貯蓄・節約志向を測定するものであり、本診断の時間軸（L/N）の設計に直接参照しています。

---

#### 軸3：意思決定スタイル（A ← → I）
**分析主導（Analytical）↔ 直感主導（Intuitive）**

| 項目 | 内容 |
|---|---|
| **測定内容** | 金融的意思決定においてデータ・論理と直感・感情のどちらを重視するか |
| **理論的根拠** | BIT（Pompian, 2012）の認知主導vs感情主導分類、カーネマンのシステム1・2理論 |
| **関連バイアス** | 確証バイアス（Confirmation Bias）、感情ヒューリスティック（Affect Heuristic） |
| **参照尺度** | BIT診断（認知主導/感情主導の軸） |

**解説：**  
カーネマンは著書 *Thinking, Fast and Slow*（2011）において、人間の思考を「速い直感的思考（システム1）」と「遅い論理的思考（システム2）」に分類しました。ポンピアンのBITフレームワークも同様に、投資家を「感情主導型」と「認知主導型」に分類することを診断の中核に置いています。本診断の判断軸（A/I）はこの分類を直接参照しています。

---

#### 軸4：価値の方向性（P ← → C）
**自己実現重視（Personal）↔ 社会貢献重視（Collective）**

| 項目 | 内容 |
|---|---|
| **測定内容** | お金の使い道として「自分の人生の質向上」と「社会・他者への貢献」のどちらを優先するか |
| **理論的根拠** | KMSI（Klontz et al., 2011）のマネー崇拝vs警戒、Big Five・協調性との相関、MAS・Power-Prestige次元 |
| **関連バイアス** | 付与効果（Endowment Effect）、感情ヒューリスティック |
| **参照尺度** | KMSI-R（Klontz et al.）、Big Five協調性尺度 |

**解説：**  
クロンツらが開発したKMSI（Klontz Money Script Inventory）は、お金に対する無意識の信念体系（マネースクリプト）を測定します。「マネー崇拝（自分のためにお金を使う）」と「マネー警戒（慎重に管理し、社会的文脈を意識する）」の対比は、本診断の価値軸（P/C）の設計に参照されています。また、Big Fiveの「協調性（Agreeableness）」が高い人ほど慈善活動や他者への金銭的援助を重視することが研究で示されており、この知見も反映しています。

---

### セクション3：参照した主要理論・モデル

**見出し：** 「本診断が参照した4つの学術モデル」

---

#### モデル1：行動投資家タイプ（BIT）
**Behavioral Investor Types — Michael M. Pompian (2012)**

ポンピアンが著書 *Behavioral Finance and Investor Types* で提唱したBITフレームワークは、投資家を「リスク許容度」と「意思決定スタイル（感情主導/認知主導）」の2軸で4タイプに分類します。

| タイプ | リスク許容度 | 意思決定 | 主要バイアス |
|---|---|---|---|
| 保全者（Preserver） | 低 | 感情主導 | 損失回避・現状維持 |
| 追随者（Follower） | 低〜中 | 感情主導 | 後悔回避・フレーミング |
| 独立者（Independent） | 中〜高 | 認知主導 | 確証バイアス・保守主義 |
| 蓄積者（Accumulator） | 高 | 認知主導 | 過信・コントロールの錯覚 |

本診断の**リスク軸（S/R）**と**判断軸（A/I）**は、このBITの2軸を直接参照しています。

---

#### モデル2：マネースクリプト・インベントリ（KMSI）
**Klontz Money Script Inventory — Brad Klontz et al. (2011)**

クロンツらが422名を対象とした因子分析で開発したKMSIは、幼少期に形成されお金に対する無意識の信念体系（マネースクリプト）を4タイプで測定します。

| タイプ | 核心的信念 | 典型的行動 |
|---|---|---|
| マネー回避 | 「お金は悪いもの」 | 金融的話題を避ける |
| マネー崇拝 | 「お金があれば全て解決」 | 過剰労働・衝動買い |
| マネー地位 | 「純資産＝自己価値」 | ブランド品への過剰支出 |
| マネー警戒 | 「常に節約すべき」 | 倹約・計画的貯蓄 |

本診断の**価値軸（P/C）**の設計において、「自己実現のためにお金を使う傾向（マネー崇拝・地位）」と「社会的文脈を意識した使い方（マネー警戒・回避）」の対比を参照しています。

---

#### モデル3：マネー態度尺度（MAS）
**Money Attitude Scale — Yamauchi & Templer (1982)**

ヤマウチとテンプラーが開発したMASは、金融態度を測定する最初期の科学的尺度の一つです。29項目の質問による因子分析で、5つの独立した次元が同定されました。

| 次元 | 内容 | 本診断との対応 |
|---|---|---|
| 権力・威信（Power-Prestige） | お金を権力・地位の象徴として捉える | 価値軸（P/C）に参照 |
| 保持・時間（Retention-Time） | 将来に備えた貯蓄・節約志向 | 時間軸（L/N）に参照 |
| 不信（Distrust） | 金融取引・機関への懐疑的態度 | 判断軸（A/I）に参照 |
| 品質（Quality） | 高品質のものへの支出志向 | リスク軸（S/R）に参照 |
| 不安（Anxiety） | お金に関する全般的な不安感 | リスク軸（S/R）に参照 |

---

#### モデル4：ビッグファイブ性格特性（Big Five / OCEAN）
**Big Five Personality Traits — Costa & McCrae (1992)**

心理学の標準的な性格モデルであるBig Fiveは、金融行動との相関が複数の研究で確認されています。

| 特性 | 金融行動との主な関連 | 本診断との対応 |
|---|---|---|
| 誠実性（Conscientiousness） | 計画的貯蓄・低衝動買い | 時間軸（L/N）・判断軸（A/I） |
| 神経症傾向（Neuroticism） | 金融不安・強い損失回避 | リスク軸（S/R） |
| 開放性（Openness） | 新投資商品への興味・分散志向 | リスク軸（S/R）・判断軸（A/I） |
| 外向性（Extraversion） | 社会的影響を受けやすい投資行動 | 価値軸（P/C） |
| 協調性（Agreeableness） | 他者への金銭的援助・慈善活動 | 価値軸（P/C） |

De Bortoli et al.（2019）およびExley et al.（2021）の研究により、Big Five特性と投資家プロファイルの間に統計的に有意な相関が確認されています。

---

### セクション4：診断に組み込まれた心理バイアス

**見出し：** 「あなたの回答に影響している12の心理バイアス」

**リード文：**

行動ファイナンスの研究では、人間が金融的意思決定を行う際に、系統的な「心理バイアス」が働くことが繰り返し実証されています。本診断の20問は、これらのバイアスを測定・可視化するように設計されています。

---

#### 認知バイアス（Cognitive Biases）

認知バイアスとは、情報処理の誤りから生じる思考の歪みです。理性的な判断を妨げますが、教育・気づきによって修正が可能とされています。

| バイアス名 | 定義 | 金融行動への影響 | 関連する診断軸 | 参照リンク |
|---|---|---|---|---|
| **アンカリング** | 最初に得た情報に過度に依存する | 株の購入価格に固執し損切りできない | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/a/anchoring.asp) |
| **確証バイアス** | 自分の信念を支持する情報のみを集める | 保有銘柄の悪材料を無視する | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| **代表性ヒューリスティック** | 過去のパターンで将来を予測する | 「過去に上がったから今後も上がる」 | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| **近接性バイアス** | 最近の出来事を過大評価する | 直近の市場動向に過剰反応する | 時間軸（L/N） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| **フレーミング効果** | 情報の提示方法で判断が変わる | 「90%成功」と「10%失敗」で異なる判断 | リスク軸（S/R） | [Investopedia](https://www.investopedia.com/terms/p/prospecttheory.asp) |
| **後知恵バイアス** | 結果後に「最初からわかっていた」と思う | 過去の失敗から学ばない | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |

---

#### 感情バイアス（Emotional Biases）

感情バイアスは、感情から生じるバイアスです。認知バイアスよりも修正が困難とされ、自己認識が特に重要です。

| バイアス名 | 定義 | 金融行動への影響 | 関連する診断軸 | 参照リンク |
|---|---|---|---|---|
| **損失回避** | 損失の苦痛が利益の喜びの約2倍 | 塩漬け株を保有し続ける | リスク軸（S/R） | [Investopedia](https://www.investopedia.com/terms/l/loss-psychology.asp) |
| **現状維持バイアス** | 変化を避け現状を好む | ポートフォリオ見直しを先延ばし | リスク軸（S/R） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| **過信** | 自分の能力・知識を過大評価する | 過剰取引・分散投資の軽視 | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| **後悔回避** | 後悔する可能性のある行動を避ける | 損切りや新規投資の決断を先延ばし | 判断軸（A/I） | [Investopedia](https://www.investopedia.com/terms/r/regret-avoidance.asp) |
| **付与効果** | 所有しているものを過大評価する | 保有株を適正価格以上に評価し売却しない | リスク軸（S/R） | [Investopedia](https://www.investopedia.com/terms/e/endowment-effect.asp) |
| **感情ヒューリスティック** | 感情的な好き嫌いで判断する | 好きな企業の株を割高でも買う | 価値軸（P/C） | [Investopedia](https://www.investopedia.com/terms/b/behavioralfinance.asp) |

---

### セクション5：参考文献一覧

**見出し：** 「参考文献・引用文献」

---

#### 学術論文

| # | 著者 | タイトル | 掲載誌・出版社 | 年 | リンク |
|---|---|---|---|---|---|
| [1] | Kahneman, D. & Tversky, A. | Prospect Theory: An Analysis of Decision under Risk | *Econometrica*, 47(2), 263–291 | 1979 | [JSTOR](https://www.jstor.org/stable/1914185) |
| [2] | Klontz, B., Britt, S.L., Mentzer, J., & Klontz, T. | Money Beliefs and Financial Behaviors: Development of the Klontz Money Script Inventory | *Journal of Financial Therapy*, 2(1) | 2011 | [USU PDF](https://caas.usu.edu/fcse/files/money-beliefs-and-financial-behaviors-development-the-klontz-money-script-inventory-jft-2011.pdf) |
| [3] | Yamauchi, K.T. & Templer, D.I. | The Development of a Money Attitude Scale | *Journal of Personality Assessment*, 46(5), 522–528 | 1982 | [APA PsycNet](https://doi.apa.org/doi/10.1037/t14294-000) |
| [4] | De Bortoli, D., da Costa, N., Goulart, M., & Campara, J. | Personality traits and investor profile analysis: A behavioral finance study | *PLOS ONE* | 2019 | [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/) |
| [5] | Exley, J., Doyle, P., & Snell, M. | O.C.E.A.N.: How Does Personality Predict Financial Success | *Journal of Financial Planning* | 2021 | [FPA](https://www.financialplanningassociation.org/article/ocean-how-does-personality-predict-financial-success-OPEN) |
| [6] | Klontz, B. | How Clients' Money Scripts Predict Their Financial Behaviors | *Journal of Financial Planning* | 2012 | [FPA](https://www.financialplanningassociation.org/article/journal/NOV12-how-clients-money-scripts-predict-their-financial-behaviors) |
| [7] | Pompian, M.M. | The Four Behavioral Investor Types | *Morningstar* | 2018 | [Morningstar](https://www.morningstar.com/financial-advisors/four-behavioral-investor-types) |
| [8] | Fallaw, S.S. | Gaining Better Understanding of Client Personality Using Psychometric Assessments | *Kitces.com* | 2021 | [Kitces](https://www.kitces.com/blog/psychometric-assessment-risk-tolerance-questionnaires-values-predict-future-behavior-test-design/) |

> **注記：** [3]のAPA PsycNet・[7]のMorningstarはbot対策のため curl では403が返るが、ブラウザからは正常にアクセス可能であることを確認済み。[2]のUSU PDFはリダイレクト後に正常表示を確認済み。

---

#### 書籍

| 書名 | 著者 | 出版年 | 出版社 | 概要 |
|---|---|---|---|---|
| *Behavioral Finance and Investor Types* | Michael M. Pompian | 2012 | Wiley | BITフレームワークの原典。本診断の理論的中核 |
| *Psychology of Financial Planning* | Brad Klontz et al. | 2023 | Wiley | 金融心理学の実践的教科書 |
| *The Psychology of Money* | Morgan Housel | 2020 | Harriman House | お金と人間の心理の関係を平易に解説したベストセラー |
| *Thinking, Fast and Slow* | Daniel Kahneman | 2011 | Farrar, Straus and Giroux | システム1・2思考の原典。行動ファイナンスの理論的基盤 |
| *Misbehaving* | Richard H. Thaler | 2015 | W. W. Norton & Company | 行動経済学の発展を語るノーベル賞受賞者の著作 |
| 『ファスト＆スロー』 | ダニエル・カーネマン（村井章子訳） | 2012 | 早川書房 | *Thinking, Fast and Slow* の日本語版 |
| 『お金の心理学』 | モーガン・ハウセル（児島修訳） | 2021 | ダイヤモンド社 | *The Psychology of Money* の日本語版 |
| 『行動ファイナンス ── 理論と実証』 | 加藤英明 | 2003 | 朝倉書店 | 日本の行動ファイナンス研究の代表的著書 |

---

#### 主要な測定尺度

| 尺度名 | 開発者 | 項目数 | 測定内容 | 本診断との関連 |
|---|---|---|---|---|
| **KMSI-R** | Klontz et al. | 51項目 | 4つのマネースクリプト | 価値軸（P/C）の設計に参照 |
| **MAS** | Yamauchi & Templer | 29項目 | 5次元の金融態度 | 時間軸（L/N）・リスク軸（S/R）に参照 |
| **GL-RTS** | Grable & Lytton | 13項目 | リスク許容度 | リスク軸（S/R）の設計に参照 |
| **Big Five（NEO-PI-R）** | Costa & McCrae | 240項目 | 5つの性格特性 | 全4軸の理論的基盤 |
| **BIT診断** | Pompian | 複数 | 行動投資家タイプ | リスク軸・判断軸の直接的参照元 |

---

### セクション6：参考ウェブサイト一覧

**見出し：** 「さらに学びたい方へ ── 参考ウェブサイト」

**リード文：**

本診断の理論的背景をさらに深く学びたい方のために、現在アクセス可能な信頼性の高いウェブサイトをカテゴリ別にまとめました。すべてのリンクは掲載時点（2026年3月）で存在を確認しています。

---

#### カテゴリ1：行動ファイナンス・行動経済学の基礎

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| Behavioral Finance: Biases, Emotions and Financial Behavior | Investopedia | 行動ファイナンスの全体像・主要バイアスの解説 | [アクセスする](https://www.investopedia.com/terms/b/behavioralfinance.asp) |
| Prospect Theory: What It Is and How It Works | Investopedia | プロスペクト理論の詳細解説（損失回避・フレーミング効果） | [アクセスする](https://www.investopedia.com/terms/p/prospecttheory.asp) |
| Behavioral Economics | Psychology Today | 行動経済学の心理学的基盤の解説 | [アクセスする](https://www.psychologytoday.com/us/basics/behavioral-economics) |

---

#### カテゴリ2：ノーベル賞受賞者の業績

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| Daniel Kahneman — Nobel Prize Facts | The Nobel Prize | カーネマン（2002年受賞）の業績・プロスペクト理論の背景 | [アクセスする](https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/) |
| Richard H. Thaler — Nobel Prize Facts | The Nobel Prize | セイラー（2017年受賞）の業績・ナッジ理論・行動経済学 | [アクセスする](https://www.nobelprize.org/prizes/economic-sciences/2017/thaler/facts/) |

---

#### カテゴリ3：金融心理・マネースクリプト

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| How Clients' Money Scripts Predict Their Financial Behaviors | Financial Planning Association (FPA) | KMSIの実践的応用・マネースクリプトが行動を予測する仕組み | [アクセスする](https://www.financialplanningassociation.org/article/journal/NOV12-how-clients-money-scripts-predict-their-financial-behaviors) |
| O.C.E.A.N.: How Does Personality Predict Financial Success | Financial Planning Association (FPA) | Big Five性格特性と金融的成功の相関研究 | [アクセスする](https://www.financialplanningassociation.org/article/ocean-how-does-personality-predict-financial-success-OPEN) |
| 5 Money Personality Types: Which One Are You? | Investopedia | 消費行動ベースの5つの金融性格タイプの解説 | [アクセスする](https://www.investopedia.com/articles/basics/07/money-personality.asp) |

---

#### カテゴリ4：心理バイアスの詳細解説

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| Anchoring（アンカリング） | Investopedia | アンカリングバイアスの定義・投資への影響 | [アクセスする](https://www.investopedia.com/terms/a/anchoring.asp) |
| Regret Avoidance（後悔回避） | Investopedia | 後悔回避バイアスの定義・投資への影響 | [アクセスする](https://www.investopedia.com/terms/r/regret-avoidance.asp) |
| Endowment Effect（付与効果） | Investopedia | 付与効果の定義・保有株への過大評価 | [アクセスする](https://www.investopedia.com/terms/e/endowment-effect.asp) |
| Loss Psychology（損失心理） | Investopedia | 損失回避の心理的メカニズム | [アクセスする](https://www.investopedia.com/terms/l/loss-psychology.asp) |

---

#### カテゴリ5：性格心理学（Big Five）

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| Big Five Personality Traits | Psychology Today | Big Five（OCEAN）の各特性の解説 | [アクセスする](https://www.psychologytoday.com/us/basics/big-5-personality-traits) |
| Personality | Psychology Today | 性格心理学の全体像 | [アクセスする](https://www.psychologytoday.com/us/basics/personality) |
| Five Factor Model（Big Five） | American Psychological Association (APA) | APA公式のBig Five解説 | [アクセスする](https://www.apa.org/topics/personality/five-factor) |

---

#### カテゴリ6：学術論文・研究データベース

| サイト名 | 運営 | 内容 | リンク |
|---|---|---|---|
| Personality traits and investor profile analysis（論文全文） | PubMed Central (PMC) / NIH | De Bortoli et al. (2019) の論文全文（無料公開） | [アクセスする](https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/) |
| Prospect Theory（論文） | JSTOR | Kahneman & Tversky (1979) の原著論文 | [アクセスする](https://www.jstor.org/stable/1914185) |
| Gaining Better Understanding of Client Personality | Kitces.com | 心理測定・設問設計の方法論（金融アドバイザー向け） | [アクセスする](https://www.kitces.com/blog/psychometric-assessment-risk-tolerance-questionnaires-values-predict-future-behavior-test-design/) |

---

### セクション7：免責事項・利用上の注意

**見出し：** 「本診断の限界と適切な利用方法」

**本文：**

本診断は、行動ファイナンス・金融心理学の学術的知見に基づいて設計されていますが、以下の点についてご理解ください。

**本診断でわかること：**
- あなたの金融的意思決定における傾向・価値観・スタイル
- リスクに対する心理的な向き合い方
- お金の使い道における優先順位

**本診断でわからないこと・できないこと：**
- 具体的な投資・資産運用のアドバイス
- 将来の金融的成功・失敗の予測
- 医学的・心理学的な診断（本診断は医療行為ではありません）

**ご利用上の注意：**
- 本診断の結果は、あくまで傾向を示すものであり、絶対的な分類ではありません。同じ人でも状況や時期によって結果が変わることがあります。
- 具体的な投資判断や資産運用については、必ず資格を持つファイナンシャルプランナー（FP）や金融アドバイザーにご相談ください。
- 本診断は、学術的な心理測定尺度（KMSI-R、MASなど）の完全な複製ではなく、それらの知見を参考にした独自の診断ツールです。

---

## 4. UIコンポーネント設計

### 4.1 ページ全体のレイアウト

```jsx
<section className="view-card references-page">
  <div className="references-header">
    <h2>科学的根拠・参考文献</h2>
    <p>100億円タイプ診断（FPTI）の学術的背景</p>
  </div>

  {/* 目次（アンカーリンク） */}
  <nav className="references-toc">...</nav>

  {/* セクション1: この診断について */}
  <section id="intro">...</section>

  {/* セクション2: 4軸の根拠 */}
  <section id="four-axes">...</section>

  {/* セクション3: 主要理論 */}
  <section id="theories">...</section>

  {/* セクション4: 心理バイアス */}
  <section id="biases">...</section>

  {/* セクション5: 参考文献 */}
  <section id="references">...</section>

  {/* セクション6: 参考ウェブサイト */}
  <section id="websites">...</section>

  {/* セクション7: 免責事項 */}
  <section id="disclaimer">...</section>
</section>
```

### 4.2 ウェブサイトリンクカードのコンポーネント案

参考ウェブサイト一覧は、テーブルではなく**カード形式**で表示することを推奨する。視覚的に分かりやすく、クリックしやすいためである。

```jsx
// WebsiteCard コンポーネント案
function WebsiteCard({ title, organization, description, url, category }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="website-card"
    >
      <div className="website-card__category">{category}</div>
      <div className="website-card__title">{title}</div>
      <div className="website-card__org">{organization}</div>
      <div className="website-card__desc">{description}</div>
      <div className="website-card__link">→ 開く</div>
    </a>
  )
}
```

### 4.3 コンポーネントファイル構成案

```
src/
├── components/
│   └── References.jsx          # メインコンポーネント（目次 + セクション統合）
└── data/
    └── referencesData.js       # 参考文献・理論・ウェブサイトデータ（静的データ）
```

### 4.4 App.jsxへの追加

```jsx
// App.jsx の nav-tabs に追加
<button
  type="button"
  className={`nav-tab ${selectedView === 'references' ? 'nav-tab--active' : ''}`}
  onClick={() => setSelectedView('references')}
>
  科学的根拠
</button>

// view-container に追加
{selectedView === 'references' && (
  <References />
)}
```

### 4.5 推奨CSSクラス名

| クラス名 | 用途 |
|---|---|
| `.references-page` | ページ全体のラッパー |
| `.references-header` | ページヘッダー（h2 + 説明文） |
| `.references-toc` | 目次ナビゲーション |
| `.references-section` | 各セクションのラッパー |
| `.references-section-title` | セクション見出し（h3） |
| `.references-axis-card` | 4軸カード（セクション2用） |
| `.references-theory-block` | 理論説明ブロック（セクション3用） |
| `.references-bias-table` | バイアス一覧テーブル（セクション4用） |
| `.references-cite-list` | 参考文献リスト（セクション5用） |
| `.website-card` | ウェブサイトリンクカード（セクション6用） |
| `.website-card__category` | カードのカテゴリラベル |
| `.website-card__title` | カードのタイトル |
| `.website-card__org` | カードの運営組織名 |
| `.website-card__desc` | カードの説明文 |
| `.references-disclaimer` | 免責事項ブロック（セクション7用） |

---

## 5. データファイル設計（referencesData.js）

```javascript
// src/data/referencesData.js

export const FOUR_AXES = [
  {
    id: 'risk',
    label: 'リスク態度',
    left: 'S（安定志向）',
    right: 'R（挑戦志向）',
    theory: 'プロスペクト理論（Kahneman & Tversky, 1979）、BIT（Pompian, 2012）',
    biases: ['損失回避', '現状維持バイアス'],
    scale: 'GL-RTS、BIT診断',
    description: 'カーネマンとトベルスキーのプロスペクト理論は...',
  },
  {
    id: 'time',
    label: '時間志向',
    left: 'L（長期志向）',
    right: 'N（現在志向）',
    theory: 'MAS・Retention-Time（Yamauchi & Templer, 1982）、Big Five誠実性',
    biases: ['現在バイアス', '双曲割引'],
    scale: 'MAS、Big Five誠実性尺度',
    description: '行動経済学では、人間が将来の報酬を過度に割り引いて評価する...',
  },
  {
    id: 'decision',
    label: '意思決定スタイル',
    left: 'A（分析主導）',
    right: 'I（直感主導）',
    theory: 'BIT（Pompian, 2012）、システム1・2理論（Kahneman, 2011）',
    biases: ['確証バイアス', '感情ヒューリスティック'],
    scale: 'BIT診断（認知主導/感情主導の軸）',
    description: 'カーネマンは著書 Thinking, Fast and Slow において...',
  },
  {
    id: 'value',
    label: '価値の方向性',
    left: 'P（自己実現重視）',
    right: 'C（社会貢献重視）',
    theory: 'KMSI（Klontz et al., 2011）、Big Five協調性、MAS・Power-Prestige',
    biases: ['付与効果', '感情ヒューリスティック'],
    scale: 'KMSI-R、Big Five協調性尺度',
    description: 'クロンツらが開発したKMSIは、お金に対する無意識の信念体系を...',
  },
]

export const ACADEMIC_PAPERS = [
  {
    id: 1,
    authors: 'Kahneman, D. & Tversky, A.',
    title: 'Prospect Theory: An Analysis of Decision under Risk',
    journal: 'Econometrica, 47(2), 263–291',
    year: 1979,
    url: 'https://www.jstor.org/stable/1914185',
    importance: 5,
    note: '行動ファイナンスの礎。損失回避の実証。ノーベル経済学賞（2002年）',
  },
  {
    id: 2,
    authors: 'Klontz, B., Britt, S.L., Mentzer, J., & Klontz, T.',
    title: 'Money Beliefs and Financial Behaviors: Development of the Klontz Money Script Inventory',
    journal: 'Journal of Financial Therapy, 2(1)',
    year: 2011,
    url: 'https://caas.usu.edu/fcse/files/money-beliefs-and-financial-behaviors-development-the-klontz-money-script-inventory-jft-2011.pdf',
    importance: 5,
    note: 'KMSI（マネースクリプト）の開発論文。価値軸の直接的根拠',
  },
  {
    id: 3,
    authors: 'Yamauchi, K.T. & Templer, D.I.',
    title: 'The Development of a Money Attitude Scale',
    journal: 'Journal of Personality Assessment, 46(5), 522–528',
    year: 1982,
    url: 'https://doi.apa.org/doi/10.1037/t14294-000',
    importance: 4,
    note: 'MAS（マネー態度尺度）の開発論文。時間軸・リスク軸の根拠',
  },
  {
    id: 4,
    authors: 'De Bortoli, D., da Costa, N., Goulart, M., & Campara, J.',
    title: 'Personality traits and investor profile analysis: A behavioral finance study',
    journal: 'PLOS ONE',
    year: 2019,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/',
    importance: 4,
    note: 'Big Five × 投資家プロファイルの相関研究',
  },
  {
    id: 5,
    authors: 'Exley, J., Doyle, P., & Snell, M.',
    title: 'O.C.E.A.N.: How Does Personality Predict Financial Success',
    journal: 'Journal of Financial Planning',
    year: 2021,
    url: 'https://www.financialplanningassociation.org/article/ocean-how-does-personality-predict-financial-success-OPEN',
    importance: 4,
    note: 'Big Five × 金融成功の相関研究',
  },
  {
    id: 6,
    authors: 'Klontz, B.',
    title: 'How Clients\' Money Scripts Predict Their Financial Behaviors',
    journal: 'Journal of Financial Planning',
    year: 2012,
    url: 'https://www.financialplanningassociation.org/article/journal/NOV12-how-clients-money-scripts-predict-their-financial-behaviors',
    importance: 4,
    note: 'KMSIの実践的応用・予測力',
  },
  {
    id: 7,
    authors: 'Pompian, M.M.',
    title: 'The Four Behavioral Investor Types',
    journal: 'Morningstar',
    year: 2018,
    url: 'https://www.morningstar.com/financial-advisors/four-behavioral-investor-types',
    importance: 5,
    note: 'BIT（行動投資家タイプ）の概要。リスク軸・判断軸の直接的根拠',
  },
  {
    id: 8,
    authors: 'Fallaw, S.S.',
    title: 'Gaining Better Understanding of Client Personality Using Psychometric Assessments',
    journal: 'Kitces.com',
    year: 2021,
    url: 'https://www.kitces.com/blog/psychometric-assessment-risk-tolerance-questionnaires-values-predict-future-behavior-test-design/',
    importance: 3,
    note: '心理測定・設問設計の方法論',
  },
]

export const BOOKS = [
  {
    title: 'Behavioral Finance and Investor Types',
    author: 'Michael M. Pompian',
    year: 2012,
    publisher: 'Wiley',
    note: 'BITフレームワークの原典。本診断の理論的中核',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    year: 2020,
    publisher: 'Harriman House',
    note: 'お金と人間の心理の関係を平易に解説したベストセラー',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    year: 2011,
    publisher: 'Farrar, Straus and Giroux',
    note: 'システム1・2思考の原典。行動ファイナンスの理論的基盤',
  },
  {
    title: 'ファスト＆スロー',
    author: 'ダニエル・カーネマン（村井章子訳）',
    year: 2012,
    publisher: '早川書房',
    note: 'Thinking, Fast and Slow の日本語版',
  },
  {
    title: 'お金の心理学',
    author: 'モーガン・ハウセル（児島修訳）',
    year: 2021,
    publisher: 'ダイヤモンド社',
    note: 'The Psychology of Money の日本語版',
  },
]

// 存在確認済みウェブサイト（2026年3月5日確認）
export const REFERENCE_WEBSITES = [
  // カテゴリ1: 行動ファイナンス・行動経済学の基礎
  {
    category: '行動ファイナンスの基礎',
    title: 'Behavioral Finance: Biases, Emotions and Financial Behavior',
    organization: 'Investopedia',
    description: '行動ファイナンスの全体像・主要バイアスをわかりやすく解説',
    url: 'https://www.investopedia.com/terms/b/behavioralfinance.asp',
  },
  {
    category: '行動ファイナンスの基礎',
    title: 'Prospect Theory: What It Is and How It Works',
    organization: 'Investopedia',
    description: 'プロスペクト理論（損失回避・フレーミング効果）の詳細解説',
    url: 'https://www.investopedia.com/terms/p/prospecttheory.asp',
  },
  {
    category: '行動ファイナンスの基礎',
    title: 'Behavioral Economics',
    organization: 'Psychology Today',
    description: '行動経済学の心理学的基盤を解説',
    url: 'https://www.psychologytoday.com/us/basics/behavioral-economics',
  },
  // カテゴリ2: ノーベル賞受賞者
  {
    category: 'ノーベル賞受賞者の業績',
    title: 'Daniel Kahneman — Nobel Prize Facts',
    organization: 'The Nobel Prize',
    description: 'カーネマン（2002年受賞）の業績・プロスペクト理論の背景',
    url: 'https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/',
  },
  {
    category: 'ノーベル賞受賞者の業績',
    title: 'Richard H. Thaler — Nobel Prize Facts',
    organization: 'The Nobel Prize',
    description: 'セイラー（2017年受賞）の業績・ナッジ理論・行動経済学',
    url: 'https://www.nobelprize.org/prizes/economic-sciences/2017/thaler/facts/',
  },
  // カテゴリ3: 金融心理・マネースクリプト
  {
    category: '金融心理・マネースクリプト',
    title: "How Clients' Money Scripts Predict Their Financial Behaviors",
    organization: 'Financial Planning Association (FPA)',
    description: 'KMSIの実践的応用・マネースクリプトが行動を予測する仕組み',
    url: 'https://www.financialplanningassociation.org/article/journal/NOV12-how-clients-money-scripts-predict-their-financial-behaviors',
  },
  {
    category: '金融心理・マネースクリプト',
    title: 'O.C.E.A.N.: How Does Personality Predict Financial Success',
    organization: 'Financial Planning Association (FPA)',
    description: 'Big Five性格特性と金融的成功の相関研究',
    url: 'https://www.financialplanningassociation.org/article/ocean-how-does-personality-predict-financial-success-OPEN',
  },
  {
    category: '金融心理・マネースクリプト',
    title: '5 Money Personality Types: Which One Are You?',
    organization: 'Investopedia',
    description: '消費行動ベースの5つの金融性格タイプの解説',
    url: 'https://www.investopedia.com/articles/basics/07/money-personality.asp',
  },
  // カテゴリ4: 心理バイアスの詳細解説
  {
    category: '心理バイアスの詳細解説',
    title: 'Anchoring（アンカリング）',
    organization: 'Investopedia',
    description: 'アンカリングバイアスの定義・投資への影響',
    url: 'https://www.investopedia.com/terms/a/anchoring.asp',
  },
  {
    category: '心理バイアスの詳細解説',
    title: 'Regret Avoidance（後悔回避）',
    organization: 'Investopedia',
    description: '後悔回避バイアスの定義・投資への影響',
    url: 'https://www.investopedia.com/terms/r/regret-avoidance.asp',
  },
  {
    category: '心理バイアスの詳細解説',
    title: 'Endowment Effect（付与効果）',
    organization: 'Investopedia',
    description: '付与効果の定義・保有株への過大評価',
    url: 'https://www.investopedia.com/terms/e/endowment-effect.asp',
  },
  {
    category: '心理バイアスの詳細解説',
    title: 'Loss Psychology（損失心理）',
    organization: 'Investopedia',
    description: '損失回避の心理的メカニズム',
    url: 'https://www.investopedia.com/terms/l/loss-psychology.asp',
  },
  // カテゴリ5: 性格心理学（Big Five）
  {
    category: '性格心理学（Big Five）',
    title: 'Big Five Personality Traits',
    organization: 'Psychology Today',
    description: 'Big Five（OCEAN）の各特性の解説',
    url: 'https://www.psychologytoday.com/us/basics/big-5-personality-traits',
  },
  {
    category: '性格心理学（Big Five）',
    title: 'Personality',
    organization: 'Psychology Today',
    description: '性格心理学の全体像',
    url: 'https://www.psychologytoday.com/us/basics/personality',
  },
  {
    category: '性格心理学（Big Five）',
    title: 'Five Factor Model（Big Five）',
    organization: 'American Psychological Association (APA)',
    description: 'APA公式のBig Five解説',
    url: 'https://www.apa.org/topics/personality/five-factor',
  },
  // カテゴリ6: 学術論文・研究データベース
  {
    category: '学術論文・研究データベース',
    title: 'Personality traits and investor profile analysis（論文全文）',
    organization: 'PubMed Central (PMC) / NIH',
    description: 'De Bortoli et al. (2019) の論文全文（無料公開）',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/',
  },
  {
    category: '学術論文・研究データベース',
    title: 'Prospect Theory（原著論文）',
    organization: 'JSTOR',
    description: 'Kahneman & Tversky (1979) の原著論文',
    url: 'https://www.jstor.org/stable/1914185',
  },
  {
    category: '学術論文・研究データベース',
    title: 'Gaining Better Understanding of Client Personality',
    organization: 'Kitces.com',
    description: '心理測定・設問設計の方法論（金融アドバイザー向け）',
    url: 'https://www.kitces.com/blog/psychometric-assessment-risk-tolerance-questionnaires-values-predict-future-behavior-test-design/',
  },
]
```

---

## 6. ナビゲーションタブの追加位置

`App.jsx` の現在のタブ順序は「ホーム → タイプ診断 → タイプ一覧 → 現実比較」の4つである。「科学的根拠」タブは**「現実比較」の後**（末尾）に追加することを推奨する。

```
ホーム | タイプ診断 | タイプ一覧 | 現実比較 | 科学的根拠  ← 追加
```

---

## 7. 実装優先度と工数目安

| タスク | 優先度 | 工数目安 |
|---|---|---|
| `App.jsx` へのタブ追加 | 高 | 15分 |
| `referencesData.js` の作成 | 高 | 30分 |
| `References.jsx` の基本実装（セクション1〜3） | 高 | 1〜2時間 |
| セクション4（バイアス一覧）の実装 | 中 | 30分 |
| セクション5（参考文献リスト）の実装 | 中 | 30分 |
| セクション6（ウェブサイトカード）の実装 | 中 | 45分 |
| セクション7（免責事項）の実装 | 低 | 15分 |
| CSSスタイリング | 中 | 1〜1.5時間 |
| **合計** | | **約5〜6時間** |

---

## 8. 検証済みURL一覧（2026年3月5日時点）

以下のURLはすべてブラウザからのアクセスが確認されたものである。403ステータスはbot対策によるものであり、ブラウザからは正常にアクセス可能。

| URL | ステータス | 備考 |
|---|---|---|
| https://www.investopedia.com/terms/b/behavioralfinance.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/terms/p/prospecttheory.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/terms/a/anchoring.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/terms/r/regret-avoidance.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/terms/e/endowment-effect.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/terms/l/loss-psychology.asp | ✅ 200 | 正常 |
| https://www.investopedia.com/articles/basics/07/money-personality.asp | ✅ 200 | 正常 |
| https://www.nobelprize.org/prizes/economic-sciences/2002/kahneman/facts/ | ✅ 200 | 正常 |
| https://www.nobelprize.org/prizes/economic-sciences/2017/thaler/facts/ | ✅ 200 | 正常 |
| https://www.psychologytoday.com/us/basics/behavioral-economics | ✅ 200 | 正常 |
| https://www.psychologytoday.com/us/basics/big-5-personality-traits | ✅ 200 | 正常 |
| https://www.psychologytoday.com/us/basics/personality | ✅ 200 | 正常 |
| https://www.apa.org/topics/personality/five-factor | ✅ 200 | 正常 |
| https://pmc.ncbi.nlm.nih.gov/articles/PMC6436746/ | ✅ 200 | 正常 |
| https://www.jstor.org/stable/1914185 | ✅ 200 | 正常 |
| https://www.kitces.com/blog/psychometric-assessment-risk-tolerance-questionnaires-values-predict-future-behavior-test-design/ | ✅ 200 | 正常 |
| https://www.financialplanningassociation.org/article/ocean-how-does-personality-predict-financial-success-OPEN | ✅ 200 | 正常 |
| https://www.financialplanningassociation.org/article/journal/NOV12-how-clients-money-scripts-predict-their-financial-behaviors | ✅ 200 | 正常 |
| https://caas.usu.edu/fcse/files/money-beliefs-and-financial-behaviors-development-the-klontz-money-script-inventory-jft-2011.pdf | ✅ リダイレクト後正常 | PDF直リンク |
| https://doi.apa.org/doi/10.1037/t14294-000 | ✅ ブラウザ確認済み | bot対策403 |
| https://www.morningstar.com/financial-advisors/four-behavioral-investor-types | ✅ ブラウザ確認済み | bot対策403 |

---

## 9. 関連ドキュメント

| ファイル | 内容 |
|---|---|
| `memo_docs/financial_type_references.md` | 参考文献の詳細リスト（本ドキュメントの元データ） |
| `memo_docs/financial_type_logic.md` | 4軸スコアリングロジックの仕様 |
| `memo_docs/financial_type_overview.md` | 16タイプ・4グループの概要 |
| `memo_docs/financial_type_profiles.md` | 16タイプの詳細プロフィール |
| `src/utils/diagnoseLogic.js` | スコアリングの実装コード |
