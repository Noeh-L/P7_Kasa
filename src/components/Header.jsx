import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_kasa.svg'
import { useState } from 'react'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
`

const Logo = styled.img`
  height: 65px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ff6060;
  &:visited {
    color: none;
  }
  &:hover {
    color: #ffb0b0;
  }
  &:active {
    color: #ffd0d0;
  }
`

const StyledLinkHome = styled(StyledLink)`
  margin-right: 60px;
  border-bottom: ${(props) =>
    props.$currentPage === '/' && 'solid #ff6060 3px;'};
`

const StyledLinkAbout = styled(StyledLink)`
  border-bottom: ${(props) =>
    props.$currentPage === '/about' && 'solid #ff6060 3px;'};
`

function Header() {
  const [currentPage, setCurrentPage] = useState('/')

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Logo de Kasa" />
      </Link>
      <nav>
        <StyledLinkHome
          to="/"
          onClick={(e) => setCurrentPage(`${e.target.pathname}`)}
          $currentPage={currentPage}
        >
          Accueil
        </StyledLinkHome>
        <StyledLinkAbout
          to="/about"
          onClick={(e) => setCurrentPage(`${e.target.pathname}`)}
          $currentPage={currentPage}
        >
          A propos
        </StyledLinkAbout>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
