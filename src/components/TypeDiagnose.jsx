import { useState } from 'react'

const questions = [
  {
    id: 1,
    text: '100億円のうち、社会貢献（寄付・NPO支援など）にどれくらい使いたいですか？',
    options: [
      { value: 'high_donation', label: 'かなり多く使いたい（50億円以上）' },
      { value: 'middle_donation', label: 'そこそこ使いたい（10〜50億円）' },
      { value: 'low_donation', label: '少しだけ（〜10億円）' },
      { value: 'no_donation', label: 'ほとんど使わない' },
    ],
  },
  {
    id: 2,
    text: '投資・事業にどれくらい使いたいですか？',
    options: [
      { value: 'high_invest', label: 'かなり攻めて投資したい（50億円以上）' },
      { value: 'middle_invest', label: 'バランスよく投資したい（10〜50億円）' },
      { value: 'low_invest', label: 'あまり投資はしない' },
    ],
  },
  {
    id: 3,
    text: '自分や家族の生活のためにどれくらい使いたいですか？',
    options: [
      { value: 'luxury_life', label: '超豪華ライフに全振りしたい' },
      { value: 'balanced_life', label: 'そこそこ贅沢しつつ、他にも回したい' },
      { value: 'simple_life', label: '割と質素でよい' },
    ],
  },
]

const TYPE_PROFILES = {
  social_leader: {
    name: '社会貢献リーダー型',
    description:
      '寄付や社会課題の解決に強い関心があり、お金を通じて世界を良くしたいタイプです。',
    colorClass: 'result--teal',
  },
  global_investor: {
    name: '世界投資家型',
    description:
      '投資や事業に積極的で、100億円をさらに増やしながらインパクトを出したいタイプです。',
    colorClass: 'result--blue',
  },
  luxury_creator: {
    name: '自由クリエイター型',
    description:
      '自分や家族の豊かな生活、クリエイティブな体験を重視するタイプです。',
    colorClass: 'result--purple',
  },
  balanced_planner: {
    name: 'バランス設計者型',
    description:
      '社会貢献・投資・生活のバランスを取りながら、長期的に安定した未来を描くタイプです。',
    colorClass: 'result--amber',
  },
}

function diagnoseType(answers) {
  let scores = {
    social_leader: 0,
    global_investor: 0,
    luxury_creator: 0,
    balanced_planner: 0,
  }

  if (answers[1] === 'high_donation') {
    scores.social_leader += 3
  } else if (answers[1] === 'middle_donation') {
    scores.social_leader += 2
    scores.balanced_planner += 1
  } else if (answers[1] === 'low_donation') {
    scores.balanced_planner += 1
  }

  if (answers[2] === 'high_invest') {
    scores.global_investor += 3
  } else if (answers[2] === 'middle_invest') {
    scores.global_investor += 2
    scores.balanced_planner += 1
  } else if (answers[2] === 'low_invest') {
    scores.luxury_creator += 1
  }

  if (answers[3] === 'luxury_life') {
    scores.luxury_creator += 3
  } else if (answers[3] === 'balanced_life') {
    scores.balanced_planner += 2
  } else if (answers[3] === 'simple_life') {
    scores.social_leader += 1
  }

  let bestType = 'balanced_planner'
  let bestScore = -1

  Object.entries(scores).forEach(([type, score]) => {
    if (score > bestScore) {
      bestScore = score
      bestType = type
    }
  })

  return TYPE_PROFILES[bestType]
}

export default function TypeDiagnose() {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const answeredCount = Object.keys(answers).length
  const progressPercent = (answeredCount / questions.length) * 100

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setHasSubmitted(true)

    const allAnswered = questions.every((q) => answers[q.id])
    if (!allAnswered) {
      setResult(null)
      return
    }

    const typeProfile = diagnoseType(answers)
    setResult(typeProfile)
  }

  const handleReset = () => {
    setAnswers({})
    setResult(null)
    setHasSubmitted(false)
    setCopied(false)
  }

  const handleCopy = () => {
    if (!result) return
    const text = `【100億円タイプ診断】\n私のタイプは「${result.name}」でした！\n${result.description}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section className="view-card fade-in">
      <div className="diagnose-header">
        <h2>100億円タイプ診断</h2>
        <p>
          3つの質問に答えると、あなたの「100億円タイプ」が判明します。
        </p>
      </div>

      <div className="progress-bar-container">
        <span className="progress-bar-label">
          {answeredCount} / {questions.length}
        </span>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="diagnose-form">
        {questions.map((question, index) => (
          <div key={question.id} className="question-block">
            <p className="question-number">Q{index + 1}</p>
            <p className="question-text">{question.text}</p>
            <div className="question-options">
              {question.options.map((option) => (
                <label
                  key={option.value}
                  className={`option-label${
                    answers[question.id] === option.value
                      ? ' option-label--selected'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.value}
                    checked={answers[question.id] === option.value}
                    onChange={(e) => handleChange(question.id, e.target.value)}
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {hasSubmitted && !result && (
          <p className="validation-message">すべての質問に回答してください。</p>
        )}

        <div className="form-actions">
          <button type="submit" className="primary-button">
            診断する
          </button>
          <button type="button" className="secondary-button" onClick={handleReset}>
            リセット
          </button>
        </div>
      </form>

      {result && (
        <div className={`result-card ${result.colorClass}`}>
          <p className="result-card-label">Your Type</p>
          <h3>{result.name}</h3>
          <hr className="result-card-divider" />
          <p>{result.description}</p>
          <div className="result-actions">
            <button
              type="button"
              className={`copy-button${copied ? ' copy-button--copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✓ コピーしました' : '結果をコピー'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
