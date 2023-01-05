import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Card.css'

const StyledCard = styled(Link)`
  width: 100%;
  overflow: hidden;
  background: #ff6060;
  position: relative;
`

const InvisibleLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 3;
  background: transparent;
`

const FilterLayer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: ${({ opacityCard }) => opacityCard};
  transition: opacity ease 0.5s;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(${(props) => props.scaleCard});
  transition: transform ease 0.5s;
`

const Title = styled.h3`
  color: white;
  margin: 0 1em 1em 1em;
  font-size: 1em;
  font-weight: normal;
  position: absolute;
  bottom: 0;
  z-index: 2;
`

function Card({ id, title, cover }) {
  let [scaleCard, setScaleCard] = useState(1)
  let [opacityCard, setOpacityCard] = useState(0.5)

  return (
    <StyledCard to={`/accomodation/${id}`} className="cardContainer">
      <InvisibleLayer
        onMouseOver={() => {
          setScaleCard(scaleCard + 0.1)
          setOpacityCard(opacityCard + 0.4)
        }}
        onMouseLeave={() => {
          setScaleCard(scaleCard - 0.1)
          setOpacityCard(opacityCard - 0.4)
        }}
      />
      <FilterLayer opacityCard={opacityCard} />
      <Image src={cover} alt={title} scaleCard={scaleCard} />
      <Title>{title}</Title>
    </StyledCard>
  )
}

export default Card
