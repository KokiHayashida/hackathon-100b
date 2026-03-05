/**
 * 16タイプの相性詳細データ（financial_combination.md より）
 * 各タイプの最高相性・最悪相性（code, name, compatibilityLabel, catchCopy, explanation）
 */
export const TYPE_COMBINATION_DETAIL = {
  SLAP: {
    best: {
      code: 'RLIP',
      name: 'ベンチャープロデューサー型',
      compatibilityLabel: '最強の守護神と開拓者',
      catchCopy: '「暴走を止めるブレーキと、停滞を壊すアクセルの融合」',
      explanation:
        'リスクを恐れず未来に賭けるRLIPを、SLAPの緻密な管理能力が支えます。RLIPが稼いできた「攻め」の資金を、SLAPが1円の狂いもなく「守り」の資産へ変えることで、100億円は決して底を突かない永久機関へと進化します。',
    },
    worst: {
      code: 'SNIP',
      name: '体験クリエイター型',
      compatibilityLabel: '理解不能の壁',
      catchCopy: '「1円の重みを知る者と、100億を瞬間に変える者の悲劇」',
      explanation:
        '100年後の安泰を願うSLAPにとって、SNIPの「今を楽しむための10億」は正気の沙汰ではありません。逆にSNIPにとって、SLAPの節約は「人生の無駄遣い」に見えます。共同財布を持った瞬間、時限爆弾が作動します。',
    },
  },
  SLAC: {
    best: {
      code: 'RLAC',
      name: '変革リーダー型',
      compatibilityLabel: '冷徹なる帝国建設者',
      catchCopy: '「理想の社会を描く設計図と、それを形にする精密機械」',
      explanation:
        'RLACの壮大な社会変革ビジョンを、SLACが完璧な運用戦略で現実のものにします。感情を排した合理的な二人が組めば、100億円をレバレッジにして、既存の古い業界構造を根底から作り変えることが可能です。',
    },
    worst: {
      code: 'RNIP',
      name: 'ダイナミック実行者型',
      compatibilityLabel: '緻密vs無謀の衝突',
      catchCopy: '「100年先を読む目と、0.1秒先しか見ない足」',
      explanation:
        '100億円の運用計画を分刻みで立てるSLACに対し、RNIPは「面白そうだから」と直感だけで億単位を動かします。SLACの胃に穴が開くか、RNIPが全額溶かすか。秩序と混沌は、同じ部屋に存在することすらできません。',
    },
  },
  SLIP: {
    best: {
      code: 'SNAC',
      name: 'ライフスタイル重視型',
      compatibilityLabel: '美学の聖域',
      catchCopy: '「本物を見抜く目と、至高の日常を愛でる心」',
      explanation:
        '究極の「質」を求めるSLIPと、日常を美しく整えるSNAC。この二人は100億円を使って、地上で最も純度の高い空間を創り上げます。流行に左右されない、時代を超えた「本物の価値」に囲まれて生きる、静かで贅沢な人生を共有します。',
    },
    worst: {
      code: 'RNAP',
      name: 'ハイリスク探求型',
      compatibilityLabel: '美意識と実利の断絶',
      catchCopy: '「永遠を愛でる審美眼と、数字を回すギャンブラー」',
      explanation:
        '100億円を「不滅の芸術」に換えたいSLIPにとって、リスクを取って数字を転がすRNAPは、神聖な美学を汚す卑俗な博打打ちに見えます。逆にRNAPにとって、アンティークに金を寝かせるSLIPは、資金効率を殺す「無能」に見えます。',
    },
  },
  SLIC: {
    best: {
      code: 'SNIC',
      name: 'コミュニティ設計者型',
      compatibilityLabel: '慈愛の庭園管理',
      catchCopy: '「幸せを配分する経営と、絆を育む居場所」',
      explanation:
        '資産のバランスを重んじるSLICと、周囲の幸福を願うSNIC。この二人が組めば、100億円は自分たちだけでなく、周囲の人々も潤す「持続可能な理想郷」を維持するために使われます。最も健全で、最も穏やかなお金の使い道です。',
    },
    worst: {
      code: 'RNIC',
      name: 'コミュニティ革命家型',
      compatibilityLabel: '安定と熱狂の摩擦',
      catchCopy: '「静かな湖畔の経営者と、全てを燃やす放火魔」',
      explanation:
        '全方位のバランスを保ちたいSLICにとって、100億円で派手な騒動を起こし、周囲を熱狂に巻き込むRNICは、生活の平穏を脅かす破壊者です。RNICの過激な言動に、SLICの精神的キャパシティは一瞬で崩壊します。',
    },
  },
  RLAP: {
    best: {
      code: 'RNAP',
      name: 'ハイリスク探求型',
      compatibilityLabel: '知略の頂点',
      catchCopy: '「世界を股にかける視点と、極限を読み切る知性」',
      explanation:
        '世界規模のチャンスを追うRLAPと、不確実な勝負を制するRNAP。この二人が組めば、100億円は世界中の市場を支配するための強力な弾丸となります。知的な興奮を共有し、誰も到達できない富の高みへと駆け上がります。',
    },
    worst: {
      code: 'SLIC',
      name: 'バランス経営者型',
      compatibilityLabel: '加速と停滞の不一致',
      catchCopy: '「国境を越える翼と、地に根を張る錨（いかり）」',
      explanation:
        'リスクを取ってでも未知の領土へ行きたいRLAPにとって、安定とバランスを説くSLICは、自分の足を引っ張る「ブレーキ」でしかありません。RLAPがアクセルを踏むたびにSLICが悲鳴を上げ、計画は一歩も進まなくなります。',
    },
  },
  RLIP: {
    best: {
      code: 'SLAP',
      name: '堅実ビルダー型',
      compatibilityLabel: '爆発と抑制の黄金比',
      catchCopy: '「夢に投資する天才と、現実を管理する秀才」',
      explanation:
        '次々と新しい「種」に100億円を注ぎ込みたいRLIPを、SLAPが論理的なリスク管理で支えます。RLIPの豪快な攻めをSLAPが裏で支えることで、どんなに大きな勝負に出ても致命傷を負わない、無敵の布陣が完成します。',
    },
    worst: {
      code: 'SLIP',
      name: '品質追求型',
      compatibilityLabel: 'スピードと拘りの衝突',
      catchCopy: '「明日を創る開拓者と、昨日を守る鑑定士」',
      explanation:
        'スピード重視で新しい事業を興したいRLIPにとって、一つのディテールに数億円と数年をかけるSLIPのこだわりは、ただの「時間の無駄」です。SLIPが品質にこだわっている間に、RLIPは次のチャンスを見失い、苛立ちを爆発させます。',
    },
  },
  RLIC: {
    best: {
      code: 'RNIC',
      name: 'コミュニティ革命家型',
      compatibilityLabel: '社交と熱狂の相乗効果',
      catchCopy: '「縁を繋ぐハブと、魂を揺さぶる扇動者」',
      explanation:
        'RLICが100億円で最高の人材を集め、RNICがその熱狂を加速させます。この二人が組めば、瞬く間に世界を巻き込む巨大なムーブメントが誕生します。「人」という無形の資産を最大化させる、最強のプロデュースユニットです。',
    },
    worst: {
      code: 'SLAC',
      name: 'ストラテジスト型',
      compatibilityLabel: '感情とロジックの断絶',
      catchCopy: '「人脈の魔術師と、孤高の計算機」',
      explanation:
        '100億円を「人との繋がり」に投資したいRLICにとって、全てを数値と効率で判断するSLACは、血の通わないロボットに見えます。SLACが投資の妥当性を問いただすたびに、RLICは「夢がない」と幻滅し、関係は冷え切ります。',
    },
  },
  RLAC: {
    best: {
      code: 'SLAC',
      name: 'ストラテジスト型',
      compatibilityLabel: '支配と統治のコンプリート',
      catchCopy: '「歴史を書き換える覇者と、絶対的な軍師」',
      explanation:
        'RLACの「世界をこう作り変える」という強い意志を、SLACが完璧な実務と戦略で裏打ちします。100億円を一切の無駄なく「権力」と「仕組み」に変えていくこのコンビは、もはや一つの国家に匹敵する影響力を持ちます。',
    },
    worst: {
      code: 'SNIP',
      name: '体験クリエイター型',
      compatibilityLabel: '大義と放蕩の対立',
      catchCopy: '「未来を担う救世主と、今を遊び尽くす刹那主義者」',
      explanation:
        '100億円を人類の進歩のために使いたいRLACにとって、それを個人的な快楽（旅行や趣味）に溶かすSNIPは、ただの「社会の害悪」です。SNIPが遊ぶほどRLACの怒りは頂点に達し、SNIPにとってRLACは最悪の説教者にしか見えません。',
    },
  },
  SNIC: {
    best: {
      code: 'SLIC',
      name: 'バランス経営者型',
      compatibilityLabel: '調和のとれた幸福',
      catchCopy: '「絆を守る番人と、富を安定させる経営者」',
      explanation:
        'SNICが作る温かなコミュニティを、SLICが経済的な安定で支えます。100億円を「みんなが長く笑って暮らせるための基金」として共同管理できる二人です。波風の立たない、最も平和で幸せな富の形を実現します。',
    },
    worst: {
      code: 'RNAC',
      name: 'トレンドメーカー型',
      compatibilityLabel: '真心と虚栄の乖離',
      catchCopy: '「故郷を守る者と、流行を追い抜く者」',
      explanation:
        '変わらない絆を大切にするSNICにとって、100億円で次々と新しい流行を作り、人を使い捨てるように動くRNACは冷酷な存在に映ります。RNACの「古臭いものは切り捨てる」という姿勢に、SNICの心は深く傷つきます。',
    },
  },
  RNIC: {
    best: {
      code: 'RLIC',
      name: 'ネットワーク構築型',
      compatibilityLabel: 'ムーブメントの爆心地',
      catchCopy: '「火を放つカリスマと、燃料を運ぶ仲介者」',
      explanation:
        'RNICが放つ強烈なメッセージに、RLICが100億円をかけて「最適な観客と協力者」をマッチングさせます。この二人が組めば、一夜にして常識が覆り、世界中に信者が生まれます。熱狂を「富」に変える魔法のコンビです。',
    },
    worst: {
      code: 'SNAP',
      name: 'マイペース愛好家型',
      compatibilityLabel: '熱風と静寂の拒絶',
      catchCopy: '「祭りの主役と、独りを愛する隠者」',
      explanation:
        '100億円で一万人を躍らせたいRNICにとって、一人で静かに本を読んでいたいSNAPは「理解不能な退屈人間」です。逆にSNAPにとって、土足で静寂を荒らし、熱狂を強要してくるRNICは、ストレスの根源でしかありません。',
    },
  },
  RNAC: {
    best: {
      code: 'RNIP',
      name: 'ダイナミック実行者型',
      compatibilityLabel: '時代の最前線',
      catchCopy: '「未来を見抜く審美眼と、光速で形にする行動力」',
      explanation:
        'RNACが100億円を投じるべき「次の流行」を予言し、RNIPが即座にそれを形にします。誰よりも早く、誰よりも鮮やかに世界を塗り替える二人。常にスポットライトを浴び、時代の寵児として君臨し続けるエネルギッシュな関係です。',
    },
    worst: {
      code: 'SNIC',
      name: 'コミュニティ設計者型',
      compatibilityLabel: '革新と執着の衝突',
      catchCopy: '「明日を創るアイコンと、昨日を惜しむ守護者」',
      explanation:
        '100億円を使ってでも古いしきたりを壊し、新しさを追求するRNAC。対して、伝統や古い縁を守りたいSNIC。RNACの「進化のための破壊」をSNICが全力で阻止しようとするため、二人は常に泥沼の感情戦に陥ります。',
    },
  },
  SNAC: {
    best: {
      code: 'SLIP',
      name: '品質追求型',
      compatibilityLabel: '完璧な日常の調和',
      catchCopy: '「洗練された生活者と、本物を知る蒐集家」',
      explanation:
        '100億円を「最高の暮らし」のために使うという目的が一致しています。SNACが整えた美しい空間に、SLIPが世界中から集めた最高品質の物品を配置する。贅沢の定義が一致しているため、争いなく、人生の質を極限まで高め合える関係です。',
    },
    worst: {
      code: 'RNAP',
      name: 'ハイリスク探求型',
      compatibilityLabel: '平穏と戦場の乖離',
      catchCopy: '「心地よさを愛でる哲学者と、戦火を望む兵士」',
      explanation:
        '心身の平穏と美しい日常を100億円で守りたいSNACに対し、RNAPは平気でその安寧をリスクに晒して勝負に出ます。RNAPが持ってくる「ヒリつくような投資話」は、SNACにとって生活を破壊するノイズ以外の何物でもありません。',
    },
  },
  SNIP: {
    best: {
      code: 'RNIP',
      name: 'ダイナミック実行者型',
      compatibilityLabel: '伝説の共犯者',
      catchCopy: '「遊びの天才と、ブレーキのない冒険家」',
      explanation:
        '「100億円で宇宙旅行に行こう！」というSNIPの提案に、RNIPは「もうチケットは手配した」と即答します。今この瞬間を最大限に面白がる二人が組めば、人生は壮大な映画のように輝きます。世界で一番、100億円を楽しく使い切るコンビです。',
    },
    worst: {
      code: 'RLAC',
      name: '変革リーダー型',
      compatibilityLabel: '自由への介入と支配',
      catchCopy: '「空飛ぶ鳥と、それを檻に入れる統治者」',
      explanation:
        '自分の感性だけで100億円を使いたいSNIPにとって、その資金を「社会的な目的」や「規律」で縛ろうとするRLACは、自由を奪う天敵です。RLACが正論を吐くたびに、SNIPは窒息しそうなほどの窮屈さを感じ、逃げ出します。',
    },
  },
  SNAP: {
    best: {
      code: 'SNIP',
      name: '体験クリエイター型',
      compatibilityLabel: '沈黙の共感',
      catchCopy: '「孤独を愛する者と、束縛を嫌う者」',
      explanation:
        '互いに「自分の好きにしたい」という欲求を理解しているため、100億円があっても互いの領域に干渉しません。時にSNIPが面白い体験をシェアし、SNAPが静かにそれに乗る。依存せず、適度な距離感で人生の自由を最大化できる相棒です。',
    },
    worst: {
      code: 'RNIC',
      name: 'コミュニティ革命家型',
      compatibilityLabel: '静寂と爆音の不協和音',
      catchCopy: '「静寂の聖域と、メガホンを持つ扇動者」',
      explanation:
        '100億円で「誰にも会わない静かな時間」を買いたいSNAPに対し、RNICは「みんなで集まって何か変えようぜ！」と土足で踏み込んできます。SNAPにとって、RNICの情熱はただの精神的暴力。出会った瞬間、SNAPは心のシャッターを下ろします。',
    },
  },
  RNAP: {
    best: {
      code: 'RLAP',
      name: 'グローバル冒険家型',
      compatibilityLabel: '世界最強の投資家連合',
      catchCopy: '「極限の勝負師と、国境なき開拓者」',
      explanation:
        '100億円を「世界を支配するためのチップ」として共に運用できます。RLAPが持ってくるグローバルなチャンスに、RNAPが精緻なリスク計算で勝機を見出す。お互いの知性を認め合い、桁違いの富を叩き出し続ける知略の二人組です。',
    },
    worst: {
      code: 'SLIP',
      name: '品質追求型',
      compatibilityLabel: '数値と感性の致命的ズレ',
      catchCopy: '「利益の狩人と、無駄を愛する審美家」',
      explanation:
        '資金効率を最優先し、1円でも多く増やしたいRNAPにとって、100億円を「ただの綺麗な絵や茶器」に寝かせるSLIPは、知性を疑うレベルの浪費家に映ります。価値の基準が180度違うため、会話をすればするほど互いを軽蔑します。',
    },
  },
  RNIP: {
    best: {
      code: 'SNIP',
      name: '体験クリエイター型',
      compatibilityLabel: '刹那のトップランナー',
      catchCopy: '「閃きの爆弾と、熱狂の受容体」',
      explanation:
        '「今、これやったら最高じゃない？」というRNIPの突発的な行動を、SNIPは最高の笑顔で面白がります。100億円をガソリンにして、誰も見たことのない景色を時速300kmで駆け抜ける二人。後悔など微塵も感じない、最強の「今を生きる」コンビです。',
    },
    worst: {
      code: 'SLAP',
      name: '堅実ビルダー型',
      compatibilityLabel: '疾走と拘束の悲劇',
      catchCopy: '「全速力のエンジンと、錆びついた手枷」',
      explanation:
        '閃いた瞬間に100億円を動かしたいRNIPにとって、決済に何日もかけ、リスクを並べ立てるSLAPは、自分の翼をもぎ取る残酷な存在です。SLAPの「念のための確認」が、RNIPにとっては最大のストレスとなり、爆発的な喧嘩が絶えません。',
    },
  },
}
