
import { useState } from 'react'
import TypeDiagnose from './components/TypeDiagnose.jsx'
import SpendSpeed from './components/SpendSpeed.jsx'
import RealityCompare from './components/RealityCompare.jsx'
import './App.css'

function App() {
  const [selectedView, setSelectedView] = useState('home')

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">100億円 人生シミュレーター</h1>
        <p className="app-subtitle">
          もしあなたが100億円を持っていたら、どんな人生戦略を描きますか？
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
          className={`nav-tab ${selectedView === 'diagnosis' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('diagnosis')}
        >
          人生スキル診断
        </button>
        <button
          type="button"
          className={`nav-tab ${selectedView === 'speed' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('speed')}
        >
          100億消費スピード
        </button>
        <button
          type="button"
          className={`nav-tab ${selectedView === 'compare' ? 'nav-tab--active' : ''}`}
          onClick={() => setSelectedView('compare')}
        >
          現実比較モード
        </button>
      </nav>

      <main className="view-container">
        {selectedView === 'home' && (
          <section className="view-card">
            <h2>ようこそ</h2>
            <p>
              このアプリは、あなたが100億円を手にしたときの「人生の選択肢」を体験するためのシミュレーターです。
            </p>
            <p>
              上のタブから「人生スキル診断」「100億円消費スピード」「現実比較モード」を選んで体験できます。
            </p>
          </section>
        )}

        {selectedView === 'diagnosis' && (
          <TypeDiagnose />
        )}

        {selectedView === 'speed' && (
          <SpendSpeed />
        )}

        {selectedView === 'compare' && (
          <RealityCompare />
        )}
      </main>
    </div>
  )

}

export default App