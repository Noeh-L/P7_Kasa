import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo_kasa.svg'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;
`

const Logo = styled.img`
  height: 65px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ff6060;
  transition: all ease 0.4s;
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
    props.$currentPage === '/' ? 'solid #ff6060 3px;' : 'none'};
`

const StyledLinkAbout = styled(StyledLink)`
  border-bottom: ${(props) =>
    props.$currentPage === '/about' ? 'solid #ff6060 3px;' : 'none'};
`

function Header() {
  const location = useLocation()
  const path = location.pathname

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Logo de Kasa" />
      </Link>
      <nav>
        <StyledLinkHome to="/" $currentPage={path}>
          Accueil
        </StyledLinkHome>
        <StyledLinkAbout to="/about" $currentPage={path}>
          A propos
        </StyledLinkAbout>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
