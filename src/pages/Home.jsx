import datas from '../datas/datas.json'
import Banner from '../components/Banner'
import Card from '../components/Card'
import styled from 'styled-components'
import img_banner from '../assets/home_banner.png'

const HomePageWrapper = styled.div`
  width: 100%;
  margin: auto;
`

const CardGrid = styled.section`
  margin-bottom: 3em;
  padding: 2em;
  border-radius: 25px;
  background: #f7f7f7;
  display: inline-grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
`

function Home() {
  return (
    <HomePageWrapper>
      <Banner image={img_banner} sentence={'Chez vous, partout et ailleurs'} />
      <CardGrid>
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
      </CardGrid>
    </HomePageWrapper>
  )
}

export default Home
