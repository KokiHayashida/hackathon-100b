import { useState } from 'react'
import { questions } from '../data/questions.js'
import { TYPE_PROFILES } from '../data/typeProfiles.js'
import { calculateScores, getTypeCode } from '../utils/diagnoseLogic.js'

const SCALE_LABELS = {
  1: '全くそう思わない',
  2: 'そう思わない',
  3: 'どちらとも',
  4: 'そう思う',
  5: '強くそう思う',
}

const DIAGNOSE_DELAY_MS = 2000

export default function TypeDiagnose() {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isDiagnosing, setIsDiagnosing] = useState(false)

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

    const allAnswered = questions.every((q) => answers[q.id] != null && answers[q.id] !== '')
    if (!allAnswered) {
      setResult(null)
      return
    }

    setIsDiagnosing(true)
    setTimeout(() => {
      const scores = calculateScores(answers)
      const typeCode = getTypeCode(scores)
      const profile = TYPE_PROFILES[typeCode]
      if (profile) {
        setResult({ ...profile, typeCode })
      } else {
        setResult(null)
      }
      setIsDiagnosing(false)
    }, DIAGNOSE_DELAY_MS)
  }

  const handleReset = () => {
    setAnswers({})
    setResult(null)
    setHasSubmitted(false)
    setCopied(false)
    setIsDiagnosing(false)
  }

  const handleCopy = () => {
    if (!result) return
    const lines = [
      `【100億円タイプ診断】`,
      `私のタイプは「${result.name}」（${result.typeCode}）でした！`,
      '',
      result.feature,
    ]
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (isDiagnosing) {
    return (
      <section className="view-card fade-in">
        <div className="diagnose-loading">
          <div className="diagnose-loading-spinner" aria-hidden="true" />
          <p className="diagnose-loading-text">診断中...</p>
        </div>
      </section>
    )
  }

  if (result) {
    return (
      <section className="view-card fade-in">
        <div className={`result-card ${result.colorClass}`}>
          <p className="result-card-label">Your Type</p>
          <h3>{result.name}</h3>
          <p className="result-type-code">{result.typeCode}</p>
          <hr className="result-card-divider" />
          <p className="result-feature">{result.feature}</p>
          {result.strengths && result.strengths.length > 0 && (
            <div className="result-details">
              <h4>長所</h4>
              <ul>
                {result.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {result.weaknesses && result.weaknesses.length > 0 && (
            <div className="result-details">
              <h4>短所・弱点</h4>
              <ul>
                {result.weaknesses.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="result-actions">
            <button
              type="button"
              className={`copy-button${copied ? ' copy-button--copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? '✓ コピーしました' : '結果をコピー'}
            </button>
            <button type="button" className="secondary-button" onClick={handleReset}>
              もう一度診断する
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="view-card fade-in">
      <div className="diagnose-header">
        <h2>100億円タイプ診断</h2>
        <p>20問に答えると、あなたの「100億円タイプ」が判明します。</p>
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
              {question.type === 'scale' ? (
                [1, 2, 3, 4, 5].map((n) => (
                  <label
                    key={n}
                    className={`option-label${
                      String(answers[question.id]) === String(n)
                        ? ' option-label--selected'
                        : ''
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={n}
                      checked={String(answers[question.id]) === String(n)}
                      onChange={(e) => handleChange(question.id, e.target.value)}
                    />
                    <span>{n}. {SCALE_LABELS[n]}</span>
                  </label>
                ))
              ) : (
                question.options.map((option) => (
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
                ))
              )}
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
    </section>
  )
}
