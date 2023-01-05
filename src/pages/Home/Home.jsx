import datas from '../../datas/datas.json'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import img_banner from '../../assets/home_banner.png'
import './Home.css'

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeWrapper-banner">
        <Banner
          image={img_banner}
          sentence={'Chez vous, partout et ailleurs'}
        />
      </div>
      <section className="cardDeck">
        {datas.map((accomodation) => {
          return (
            <Card
              id={accomodation.id}
              key={accomodation.id}
              title={accomodation.title}
              cover={accomodation.cover}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
