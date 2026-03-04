const TOTAL_AMOUNT = 100_0000_0000

const ASSUMPTIONS = {
  convenienceStorePrice: 50_0000_000,
  lifetimeIncomePerPerson: 200_0000_000,
  apartmentBuildingPrice: 30_0000_0000,
}

function formatNumber(value) {
  return value.toLocaleString('ja-JP')
}

export default function RealityCompare() {
  const convenienceStores = TOTAL_AMOUNT / ASSUMPTIONS.convenienceStorePrice
  const lifetimeIncomes = TOTAL_AMOUNT / ASSUMPTIONS.lifetimeIncomePerPerson
  const apartmentBuildings = TOTAL_AMOUNT / ASSUMPTIONS.apartmentBuildingPrice

  return (
    <section className="view-card fade-in">
      <h2>100億円 現実比較モード</h2>
      <p>100億円が、現実世界の「どれくらいの規模感」なのかをイメージしやすくします。</p>

      <div className="compare-list">
        <div className="compare-item">
          <h3>コンビニ店舗</h3>
          <p>
            <span className="compare-big-number">{convenienceStores.toFixed(1)}</span>
            <span className="compare-big-unit">店舗分</span>
          </p>
          <p className="compare-assumption">
            前提: 1店舗あたり {formatNumber(ASSUMPTIONS.convenienceStorePrice)} 円
          </p>
        </div>

        <div className="compare-item">
          <h3>年収500万円の生涯年収</h3>
          <p>
            <span className="compare-big-number">{lifetimeIncomes.toFixed(0)}</span>
            <span className="compare-big-unit">人分</span>
          </p>
          <p className="compare-assumption">
            前提: 1人あたりの生涯年収 {formatNumber(ASSUMPTIONS.lifetimeIncomePerPerson)} 円
          </p>
        </div>

        <div className="compare-item">
          <h3>マンション</h3>
          <p>
            <span className="compare-big-number">{apartmentBuildings.toFixed(1)}</span>
            <span className="compare-big-unit">棟分</span>
          </p>
          <p className="compare-assumption">
            前提: 1棟あたり {formatNumber(ASSUMPTIONS.apartmentBuildingPrice)} 円
          </p>
        </div>
      </div>

      <p className="compare-footnote">
        ※ 上記の金額はあくまでイメージ用の仮定値です。実際の価格とは異なる場合があります。
      </p>
    </section>
  )
}
