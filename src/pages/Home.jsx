import datas from '../datas/datas.json'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Home() {
  return (
    <div>
      <Banner />
      {/* <div
        style={{
          border: 'dashed 3px red',
          display: 'flex',
          flexWrap: 'wrap',
          height: '400px',
        }}
      >
        {datas.map((kasa, index) => {
          return <Card key={kasa.id} title={kasa.title} cover={kasa.cover} />
        })}
      </div> */}
    </div>
  )
}

export default Home
