import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Error.css'

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5em;
`

const Title = styled.h1`
  color: #ff6060;
  font-size: 16rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

const Paragraphe = styled.p`
  color: #ff6060;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 7rem;
  text-align: center;
`

const RedirectLink = styled(Link)`
  color: #ff6060;
  font-size: 1.2rem;
  text-align: center;
  &:hover {
    color: #ffb0b0;
  }
  &:active {
    color: #ffd0d0;
  }
`

function Error() {
  return (
    <ErrorWrapper className="errorContainer">
      <Title>404</Title>
      <Paragraphe>Oups! La page que vous demandez n'existe pas.</Paragraphe>
      <RedirectLink to="/">Revenir sur la page d'accueil</RedirectLink>
    </ErrorWrapper>
  )
}

export default Error
