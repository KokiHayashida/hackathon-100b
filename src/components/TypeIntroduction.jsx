import ReactMarkdown from 'react-markdown'
import { GROUP_INFO } from '../data/groupInfo'
import { TYPE_PROFILES } from '../data/typeProfiles'
import { TYPE_INTRODUCTION_DATA } from '../data/typeIntroduceData'

export default function TypeIntroduction() {
  const typeDataMap = Object.fromEntries(
    TYPE_INTRODUCTION_DATA.map((t) => [t.typeCode, t])
  )

  return (
    <section className="view-card type-intro">
      <div className="type-intro-header">
        <h2>16タイプ一覧</h2>
        <p>100億円タイプの全16タイプを、診断結果よりも詳しく紹介します。</p>
      </div>

      {/* 目次 */}
      <nav className="type-intro-toc" aria-label="タイプ別目次">
        {GROUP_INFO.map((group) => (
          <div key={group.id} className="type-intro-toc-group">
            <h3 className="type-intro-toc-group-title">
              {group.name}
              <span className="type-intro-toc-group-subtitle">
                {group.subtitle}
              </span>
            </h3>
            <ul className="type-intro-toc-links">
              {group.typeCodes.map((code) => {
                const data = typeDataMap[code]
                if (!data) return null
                return (
                  <li key={code}>
                    <a href={`#type-${code}`} className="type-intro-toc-link">
                      {code} {data.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* 各タイプの詳細 */}
      <div className="type-intro-sections">
        {TYPE_INTRODUCTION_DATA.map((type) => {
          const profile = TYPE_PROFILES[type.typeCode]
          const colorClass = profile?.colorClass ?? 'result--teal'

          return (
            <article
              key={type.typeCode}
              id={`type-${type.typeCode}`}
              className={`type-intro-section ${colorClass}`}
            >
              <h3 className="type-intro-section-title">
                {type.typeCode}：{type.name}
              </h3>
              <blockquote className="type-intro-quote">{type.quote}</blockquote>
              <div className="type-intro-content">
                <ReactMarkdown>{type.content}</ReactMarkdown>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
