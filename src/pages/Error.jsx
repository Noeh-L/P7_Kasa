import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
`

const Title = styled.div`
  color: #ff6060;
  font-size: 16rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const Paragraphe = styled.div`
  color: #ff6060;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 7rem;
`

const RedirectLink = styled(Link)`
  color: #ff6060;
  font-size: 1.2rem;
  &:hover {
    color: #ffb0b0;
  }
  &:active {
    color: #ffd0d0;
  }
`

function Error() {
  return (
    <ErrorWrapper>
      <Title>404</Title>
      <Paragraphe>Oups! La page que vous demandez n'existe pas.</Paragraphe>
      <RedirectLink to="/">Revenir sur la page d'accueil</RedirectLink>
    </ErrorWrapper>
  )
}

export default Error
