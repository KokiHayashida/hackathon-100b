import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { GROUP_INFO } from '../data/groupInfo'
import { TYPE_PROFILES } from '../data/typeProfiles'
import { TYPE_INTRODUCTION_DATA } from '../data/typeIntroduceData'
import { TYPE_COMBINATION_DETAIL } from '../data/typeCombinationDetail'
import { getTypeImagePath } from '../utils/typeImagePath.js'

export default function TypeIntroduction({ scrollToType, onScrollDone }) {
  const typeDataMap = Object.fromEntries(
    TYPE_INTRODUCTION_DATA.map((t) => [t.typeCode, t])
  )

  useEffect(() => {
    if (!scrollToType) return
    const id = `type-${scrollToType}`
    const el = document.getElementById(id)
    if (!el) return
    const timer = setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setTimeout(() => onScrollDone?.(), 600)
    }, 100)
    return () => clearTimeout(timer)
  }, [scrollToType, onScrollDone])

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
          const combo = TYPE_COMBINATION_DETAIL[type.typeCode]

          return (
            <article
              key={type.typeCode}
              id={`type-${type.typeCode}`}
              className={`type-intro-section ${colorClass}`}
            >
              <div className="type-intro-section-hero">
                <div className="type-intro-section-image-wrap">
                  <img
                    src={getTypeImagePath(type.typeCode)}
                    alt={`${type.name}のイメージ`}
                    className="type-intro-section-image"
                  />
                </div>
                <div className="type-intro-section-hero-text">
                  <h3 className="type-intro-section-title">
                    {type.typeCode}：{type.name}
                  </h3>
                  <blockquote className="type-intro-quote">{type.quote}</blockquote>
                </div>
              </div>
              <div className="type-intro-content">
                <ReactMarkdown>{type.content}</ReactMarkdown>
              </div>
              {combo && (
                <div className="type-intro-compatibility">
                  <h4 className="type-intro-compat-title">タイプ相性</h4>
                  <div className="type-intro-compat-block type-intro-compat-best">
                    <h5>最高の相性：{combo.best.code}（{combo.best.name}）</h5>
                    <p className="type-intro-compat-stars">★★★★★（{combo.best.compatibilityLabel}）</p>
                    <p className="type-intro-compat-catch">{combo.best.catchCopy}</p>
                    <p className="type-intro-compat-explanation">{combo.best.explanation}</p>
                  </div>
                  <div className="type-intro-compat-block type-intro-compat-worst">
                    <h5>最悪の相性：{combo.worst.code}（{combo.worst.name}）</h5>
                    <p className="type-intro-compat-stars">★☆☆☆☆（{combo.worst.compatibilityLabel}）</p>
                    <p className="type-intro-compat-catch">{combo.worst.catchCopy}</p>
                    <p className="type-intro-compat-explanation">{combo.worst.explanation}</p>
                  </div>
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
