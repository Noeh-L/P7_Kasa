import styled from 'styled-components'
import { MdStarRate } from 'react-icons/md'

const StarContainer = styled.div`
  display: flex;
  justify-content: end;
`

const RedStar = styled(MdStarRate)`
  color: #ff6060;
  font-size: 2rem;
  margin: 1px;
`
const GrayStar = styled(MdStarRate)`
  color: #e3e3e3;
  font-size: 2rem;
  margin: 1px;
`

function Rating({ rate }) {
  let numberOfRedStars = []
  let numberOfGrayStars = new Array(5 - rate).fill(<GrayStar />)

  for (let i = 1; i <= rate; i++) {
    numberOfRedStars.push(<RedStar />)
  }

  return (
    <StarContainer>
      {numberOfRedStars.map((star, index) => (
        <div key={`redStar-${index}`}>{star}</div>
      ))}
      {numberOfGrayStars.map((star, index) => (
        <div key={`grayStar-${index}`}>{star}</div>
      ))}
    </StarContainer>
  )
}

export default Rating
