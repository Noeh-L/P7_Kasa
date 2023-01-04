import { useState } from 'react'
import styled from 'styled-components'
import left_arrow from '../assets/left_arrow.svg'
import right_arrow from '../assets/right_arrow.svg'

const SlideshowContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  color: white;
`
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
`
const Control = styled.div`
  background: rgba(0 0 0 / 0.4);
  position: absolute;
  inset: 0;
  z-index: 1;
`
const ArrowsWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const Arrows = styled.img`
  cursor: pointer;
  height: 90px;
  width: 90px;
  padding: 10px;
  border-radius: 50%;
  &::before {
    content: '';
    background: blue;
    opacity: 0.4;
    position: absolute;
    inset: 0;
    z-index: 3;
  }
  &:hover {
    background: #ff6060;
    opacity: 0.7;
  }
  &:active {
    background: #ffd0d0;
    opacity: 0.5;
  }
  transition: all ease 0.4s;
`
const Page = styled.p`
  position: absolute;
  bottom: 5%;
  left: 50%;
  cursor: default;
`

function Slideshow({ pictures, altText }) {
  const [numberOfPictures] = useState(pictures.length)
  const [indexPhoto, setIndexPhoto] = useState(0)

  return (
    <SlideshowContainer>
      <ImageWrapper>
        <Image
          src={pictures[indexPhoto]}
          alt={altText}
          numberOfPictures={numberOfPictures}
        />
      </ImageWrapper>
      {numberOfPictures > 1 ? (
        <Control>
          <ArrowsWrapper>
            <Arrows
              src={left_arrow}
              alt="Flèche gauche"
              onClick={() =>
                indexPhoto <= numberOfPictures - 1 && indexPhoto > 0
                  ? setIndexPhoto(indexPhoto - 1)
                  : setIndexPhoto(numberOfPictures - 1)
              }
            />
            <Arrows
              src={right_arrow}
              alt="Flèche droite"
              onClick={() =>
                indexPhoto < numberOfPictures - 1
                  ? setIndexPhoto(indexPhoto + 1)
                  : setIndexPhoto(0)
              }
            />
          </ArrowsWrapper>
          <Page>
            {indexPhoto + 1}/{numberOfPictures}
          </Page>
        </Control>
      ) : null}
    </SlideshowContainer>
  )
}

export default Slideshow
