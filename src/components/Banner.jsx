import styled from 'styled-components'

const BannerWrapper = styled.div`
  border-radius: 25px;
  height: 250px;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 2em;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
`

const Title = styled.h1`
  color: white;
  text-align: center;
  font-weight: 600;
  margin: 0;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function Banner({ image, sentence }) {
  return (
    <BannerWrapper>
      <Image src={image} alt="Paysage naturel." />
      <Title>{sentence}</Title>
    </BannerWrapper>
  )
}

export default Banner
