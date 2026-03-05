import { GROUP_INFO } from '../data/groupInfo.js'
import { TYPE_PROFILES } from '../data/typeProfiles.js'

export default function TypeIntroduction() {
  return (
    <section className="view-card type-intro">
      <div className="type-intro-header">
        <h2>16タイプ一覧</h2>
        <p>100億円タイプの全16タイプと、4つのグループを紹介します。</p>
      </div>

      {GROUP_INFO.map((group) => (
        <div key={group.id} className="type-intro-group">
          <div className="type-intro-group-header">
            <h3>{group.name}</h3>
            <p className="type-intro-group-subtitle">{group.subtitle}</p>
            <div className="type-intro-keywords">
              {group.keywords.map((kw) => (
                <span key={kw} className="type-intro-keyword">{kw}</span>
              ))}
            </div>
          </div>

          <div className="type-intro-cards">
            {group.typeCodes.map((code) => {
              const profile = TYPE_PROFILES[code]
              if (!profile) return null
              return (
                <div
                  key={code}
                  className={`type-intro-card ${profile.colorClass || ''}`}
                >
                  <span className="type-intro-card-code">{code}</span>
                  <h4>{profile.name}</h4>
                  <p className="type-intro-card-feature">{profile.feature}</p>
                  {profile.strengths && profile.strengths.length > 0 && (
                    <div className="type-intro-card-details">
                      <span className="type-intro-detail-label">長所</span>
                      <ul>
                        {profile.strengths.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {profile.weaknesses && profile.weaknesses.length > 0 && (
                    <div className="type-intro-card-details">
                      <span className="type-intro-detail-label">短所</span>
                      <ul>
                        {profile.weaknesses.map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
