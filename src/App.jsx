import { useState, useCallback } from 'react'
import TypeDiagnose from './components/TypeDiagnose.jsx'
import TypeIntroduction from './components/TypeIntroduction.jsx'
import RealityCompare from './components/RealityCompare.jsx'
import './App.css'

function App() {
  const [selectedView, setSelectedView] = useState('home')
  const [scrollToType, setScrollToType] = useState(null)

  const handleNavigateToType = useCallback((code) => {
    setSelectedView('types')
    setScrollToType(code)
  }, [])

  const handleScrollDone = useCallback(() => setScrollToType(null), [])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          <span className="app-title-accent">100億円</span> タイプ診断
        </h1>
        <p className="app-subtitle">
          100億円の使い道から、あなたの性格と金銭観を診断します
        </p>
      </header>

      <nav className="nav-tabs">
        <button
          type="button"
          className={`nav-tab ${selectedView === 'home' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('home')}
        >
          ホーム
        </button>
        <button
          type="button"
          className={`nav-tab nav-tab--primary ${selectedView === 'diagnosis' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('diagnosis')}
        >
          タイプ診断
        </button>
        <button
          type="button"
          className={`nav-tab ${selectedView === 'types' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('types')}
        >
          タイプ一覧
        </button>
        <button
          type="button"
          className={`nav-tab ${selectedView === 'compare' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('compare')}
        >
          現実比較
        </button>
      </nav>

      <main className="view-container" key={selectedView}>
        {selectedView === 'home' && (
          <div>
            <div className="home-hero">
              <span className="home-hero-eyebrow">Main Feature</span>
              <div className="home-hero-display">100億円</div>
              <h2>あなたならどう使う？</h2>
              <p className="home-hero-lead">
                全16タイプの診断結果
                <br />
                あなたの100億円の使い方タイプを分析
              </p>
              <p>
                20問に答えるだけで、あなたの「100億円タイプ」が判明します。
                友達と比較して、価値観の違いを楽しもう。
              </p>
              <button
                type="button"
                className="home-cta"
                onClick={() => setSelectedView('diagnosis')}
              >
                診断をはじめる →
              </button>
            </div>

            <div className="home-sub-section fade-in">
              <p className="home-sub-label">Other Modes</p>
              <div className="home-sub-cards">
                <div
                  className="home-sub-card"
                  onClick={() => setSelectedView('compare')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedView('compare')}
                >
                  <h3>100億円 現実比較モード</h3>
                  <p>コンビニ何店舗分？マンション何棟分？</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedView === 'diagnosis' && (
          <TypeDiagnose onNavigateToType={handleNavigateToType} />
        )}

        {selectedView === 'types' && (
          <TypeIntroduction
            scrollToType={scrollToType}
            onScrollDone={handleScrollDone}
          />
        )}

        {selectedView === 'compare' && (
          <RealityCompare />
        )}
      </main>
    </div>
  )

}

export default App
