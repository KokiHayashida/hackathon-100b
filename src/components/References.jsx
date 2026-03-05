import {
  TOC_ITEMS,
  FOUR_AXES,
  ACADEMIC_PAPERS,
} from '../data/referencesData'

export default function References() {
  return (
    <section className="view-card references-page">
      <div className="references-header">
        <h2>診断の根拠</h2>
        <p>100億円タイプ診断がどのような研究をもとに作られているか</p>
      </div>

      {/* 目次 */}
      <nav className="references-toc" aria-label="診断の根拠の目次">
        <ul>
          {TOC_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="references-toc-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* セクション1: この診断はどんな研究をもとにしているの？ */}
      <section id="intro" className="references-section">
        <h3 className="references-section-title">この診断の背景</h3>
        <div className="references-intro-content">
          <p>
            この診断は、<strong>行動ファイナンス</strong>と呼ばれる学問分野の研究をもとに設計されています。行動ファイナンスとは、「人間はお金に関する判断において、必ずしも合理的には行動しない」という事実を科学的に研究する分野です。
          </p>
          <p>
            2002年にノーベル経済学賞を受賞した心理学者ダニエル・カーネマンらの研究がこの分野の出発点のひとつで、現在では世界中の大学や金融機関で活用されています。
          </p>
          <p>
            「100億円をどう使うか」という問いは、あなたのお金に対する価値観・リスクへの向き合い方・意思決定のクセを浮き彫りにします。この診断はそのパターンを4つの軸で測定し、16タイプに分類しています。
          </p>
        </div>
      </section>

      {/* セクション2: 4つの診断軸のもとになった考え方 */}
      <section id="four-axes" className="references-section">
        <h3 className="references-section-title">4つの軸はどこから来たの？</h3>
        <div className="references-axis-legends">
          <div className="axis-legend-card axis-legend-card--sr">
            <div className="axis-legend-pair axis-legend-pair--vertical">
              <span className="axis-legend-item"><span className="axis-letter">S</span> = Stability（安定）</span>
              <span className="axis-legend-vs">↕</span>
              <span className="axis-legend-item"><span className="axis-letter">R</span> = Risk（挑戦）</span>
            </div>
          </div>
          <div className="axis-legend-card axis-legend-card--ln">
            <div className="axis-legend-pair axis-legend-pair--vertical">
              <span className="axis-legend-item"><span className="axis-letter">L</span> = Long-term（長期）</span>
              <span className="axis-legend-vs">↕</span>
              <span className="axis-legend-item"><span className="axis-letter">N</span> = Now（現在）</span>
            </div>
          </div>
          <div className="axis-legend-card axis-legend-card--ai">
            <div className="axis-legend-pair axis-legend-pair--vertical">
              <span className="axis-legend-item"><span className="axis-letter">A</span> = Analysis（分析）</span>
              <span className="axis-legend-vs">↕</span>
              <span className="axis-legend-item"><span className="axis-letter">I</span> = Intuition（直感）</span>
            </div>
          </div>
          <div className="axis-legend-card axis-legend-card--pc">
            <div className="axis-legend-pair axis-legend-pair--vertical">
              <span className="axis-legend-item"><span className="axis-letter">P</span> = Personal（自己）</span>
              <span className="axis-legend-vs">↕</span>
              <span className="axis-legend-item"><span className="axis-letter">C</span> = Collective（社会）</span>
            </div>
          </div>
        </div>
        {FOUR_AXES.map((axis) => (
          <div key={axis.id} className="references-axis-card">
            <h4 className="references-axis-title">{axis.label}</h4>
            <p className="references-axis-desc">{axis.description}</p>
          </div>
        ))}
      </section>

      {/* セクション3: 参考にした研究・本 */}
      <section id="references" className="references-section">
        <h3 className="references-section-title">参考にした研究・本</h3>
        <h4>論文（3本）</h4>
        <div className="references-table-wrap">
          <table className="references-table references-table--simple">
            <thead>
              <tr>
                <th>#</th>
                <th>研究</th>
                <th>一言メモ</th>
                <th>リンク</th>
              </tr>
            </thead>
            <tbody>
              {ACADEMIC_PAPERS.map((row) => (
                <tr key={row.id}>
                  <td>[{row.id}]</td>
                  <td>{row.study}</td>
                  <td>{row.memo}</td>
                  <td>
                    <a href={row.url} target="_blank" rel="noopener noreferrer">
                      {row.urlLabel}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* セクション4: 利用上の注意 */}
      <section id="disclaimer" className="references-section references-disclaimer">
        <h3 className="references-section-title">利用上の注意</h3>
        <div className="references-disclaimer-content">
          <p>
            この診断は行動ファイナンスの研究をもとに設計していますが、あくまで傾向を示すものです。同じ人でも状況や時期によって結果が変わることがあります。
          </p>
          <p>
            具体的な投資判断や資産運用については、必ず資格を持つファイナンシャルプランナー（FP）や金融アドバイザーにご相談ください。本診断は医療行為ではありません。
          </p>
        </div>
      </section>
    </section>
  )
}
