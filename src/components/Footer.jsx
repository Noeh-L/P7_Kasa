import styled from 'styled-components'
import logo_white from '../assets/logo_white.svg'

const StyledFooter = styled.footer`
  background-color: black;
  color: white;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 35px;
  margin: 20px 0;
`

function Footer() {
  return (
    <StyledFooter>
      <Logo src={logo_white} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </StyledFooter>
  )
}

export default Footer
