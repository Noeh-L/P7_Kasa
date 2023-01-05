import Banner from '../../components/Banner/Banner'
import styled from 'styled-components'
import about_banner from '../../assets/about_banner.png'
import Collapse from '../../components/Collapse/Collapse'
import './About.css'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 40em;
`

function About() {
  return (
    <AboutWrapper className="aboutWrapper">
      <div className="aboutWrapper-banner">
        <Banner image={about_banner} />
      </div>
      <div className="collapseContainer">
        <Collapse
          className="collapse"
          question={'Fiabilité'}
          answer={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
        />
        <Collapse
          question={'Respect'}
          answer={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
        />
        <Collapse
          question={'Service'}
          answer={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Collapse
          question={'Sécurité'}
          answer={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </AboutWrapper>
  )
}

export default About
