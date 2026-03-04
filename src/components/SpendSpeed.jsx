import { useState } from 'react'

const TOTAL_AMOUNT = 100_0000_0000

function calculateFromPerDay(amountPerDay) {
  if (!amountPerDay || amountPerDay <= 0) return null
  const days = TOTAL_AMOUNT / amountPerDay
  const years = days / 365
  return {
    days,
    years,
  }
}

function calculateFromPerSecond(amountPerSecond) {
  if (!amountPerSecond || amountPerSecond <= 0) return null
  const seconds = TOTAL_AMOUNT / amountPerSecond
  const days = seconds / (60 * 60 * 24)
  const years = days / 365
  return {
    days,
    years,
  }
}

function formatJPY(value) {
  return Number(value).toLocaleString('ja-JP')
}

export default function SpendSpeed() {
  const [perSecond, setPerSecond] = useState('')
  const [perDay, setPerDay] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    let calculated = null

    if (perSecond) {
      calculated = calculateFromPerSecond(Number(perSecond))
    } else if (perDay) {
      calculated = calculateFromPerDay(Number(perDay))
    }

    setResult(calculated)
  }

  const handleReset = () => {
    setPerSecond('')
    setPerDay('')
    setResult(null)
  }

  return (
    <section className="view-card fade-in">
      <h2>100億円 消費スピード体験</h2>
      <p>どのくらいのペースでお金を使うと、100億円がどのくらいで無くなるのかを体感できます。</p>

      <form onSubmit={handleSubmit} className="speed-form">
        <div className="field-group">
          <label className="field-label">
            1秒あたりの消費額（円）
            <input
              type="number"
              min="0"
              value={perSecond}
              onChange={(e) => setPerSecond(e.target.value)}
              placeholder="例: 100,000"
            />
          </label>
          <div className="preset-group">
            <button type="button" className="preset-button" onClick={() => setPerSecond('10000')}>
              1万円/秒
            </button>
            <button type="button" className="preset-button" onClick={() => setPerSecond('100000')}>
              10万円/秒
            </button>
            <button type="button" className="preset-button" onClick={() => setPerSecond('1000000')}>
              100万円/秒
            </button>
          </div>
          <p className="field-hint">こちらを入力すると「毎秒〇円」パターンで計算します。</p>
        </div>

        <div className="field-separator">または</div>

        <div className="field-group">
          <label className="field-label">
            1日あたりの消費額（円）
            <input
              type="number"
              min="0"
              value={perDay}
              onChange={(e) => setPerDay(e.target.value)}
              placeholder="例: 10,000,000"
            />
          </label>
          <div className="preset-group">
            <button type="button" className="preset-button" onClick={() => setPerDay('1000000')}>
              100万円/日
            </button>
            <button type="button" className="preset-button" onClick={() => setPerDay('10000000')}>
              1,000万円/日
            </button>
            <button type="button" className="preset-button" onClick={() => setPerDay('100000000')}>
              1億円/日
            </button>
          </div>
          <p className="field-hint">上の「1秒あたり」を空にしてこちらだけ入力すると、日単位で計算します。</p>
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button">
            計算する
          </button>
          <button type="button" className="secondary-button" onClick={handleReset}>
            リセット
          </button>
        </div>
      </form>

      {result && (
        <div className="result-card">
          <p className="result-card-label">Result</p>
          <h3>100億円を使い切るまで</h3>
          <hr className="result-card-divider" />
          <p>
            <span className="speed-result-value">{formatJPY(result.days.toFixed(1))}</span>
            <span className="speed-result-unit">日</span>
          </p>
          <p>
            およそ{' '}
            <span className="speed-result-value">{result.years.toFixed(2)}</span>
            <span className="speed-result-unit">年</span>
          </p>
        </div>
      )}
    </section>
  )
}
