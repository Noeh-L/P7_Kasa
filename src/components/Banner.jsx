import styled from 'styled-components'
import homeBanner from '../assets/home_banner.png'

const BannerWrapper = styled.div`
  border-radius: 30px;
  border: gray solid 1px;
  overflow: hidden;
  width: 100%;
`

const Image = styled.img``

function Banner() {
  return (
    <BannerWrapper>
      <Image src={homeBanner} alt="Bannière de la page d'accueil" />
    </BannerWrapper>
  )
}

export default Banner
