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
    <section className="view-card">
      <h2>100億円 現実比較モード</h2>
      <p>100億円が、現実世界の「どれくらいの規模感」なのかをイメージしやすくします。</p>

      <div className="compare-list">
        <div className="compare-item">
          <h3>コンビニ店舗に換算すると…</h3>
          <p>
            コンビニ1店舗あたり <strong>{formatNumber(ASSUMPTIONS.convenienceStorePrice)} 円</strong>{' '}
            と仮定すると、
          </p>
          <p>
            100億円 = 約 <strong>{convenienceStores.toFixed(1)} 店舗分</strong>
          </p>
        </div>

        <div className="compare-item">
          <h3>年収500万の人の生涯年収に換算すると…</h3>
          <p>
            1人あたりの生涯年収を <strong>{formatNumber(ASSUMPTIONS.lifetimeIncomePerPerson)} 円</strong>{' '}
            と仮定すると、
          </p>
          <p>
            100億円 = 約 <strong>{lifetimeIncomes.toFixed(0)} 人分</strong>
          </p>
        </div>

        <div className="compare-item">
          <h3>マンションに換算すると…</h3>
          <p>
            1棟あたり <strong>{formatNumber(ASSUMPTIONS.apartmentBuildingPrice)} 円</strong> のマンションだとすると、
          </p>
          <p>
            100億円 = 約 <strong>{apartmentBuildings.toFixed(1)} 棟分</strong>
          </p>
        </div>
      </div>

      <p className="placeholder">
        ※ 上記の金額はあくまでイメージ用の仮定値です。実際の価格とは異なる場合があります。
      </p>
    </section>
  )
}

