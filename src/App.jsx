
import { useState } from 'react'
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
          <section className="view-card">
            <h2>人生スキル診断 × 100億運用</h2>
            <p>
              簡単な質問に答えることで、あなたのタイプ（リーダー / 研究者 / 投資家 / クリエイター）と、
              100億円の活かし方の方向性を見つけていきます。
            </p>
            <p className="placeholder">
              ※ この画面では、後ほど「診断フォーム」と「AI風の診断結果表示」を追加していきます。
            </p>
          </section>
        )}

        {selectedView === 'speed' && (
          <section className="view-card">
            <h2>100億円 消費スピード体験</h2>
            <p>「毎秒10万円」や「毎日1000万円」でお金を使い続けたら、100億円は何年でなくなるでしょうか？</p>
            <ul className="bullet-list">
              <li>パターンA: 毎秒10万円使う</li>
              <li>パターンB: 毎日1000万円使う</li>
            </ul>
            <p className="placeholder">
              ※ この画面では、後ほど実際の計算ロジックとグラフ風の表示を追加していきます。
            </p>
          </section>
        )}

        {selectedView === 'compare' && (
          <section className="view-card">
            <h2>100億円 現実比較モード</h2>
            <p>100億円が、現実のものさしでどのくらいのスケールなのかを直感的に掴むためのモードです。</p>
            <ul className="bullet-list">
              <li>コンビニ何店舗分か</li>
              <li>年収500万の人、何人分の生涯年収か</li>
              <li>新築マンション何棟分か</li>
            </ul>
            <p className="placeholder">
              ※ この画面では、後ほど実際の金額モデルと計算結果を表示していきます。
            </p>
          </section>
        )}
      </main>
    </div>
  )

}

export default App