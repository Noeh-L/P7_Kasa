import './Collapse.css'
import styled from 'styled-components'
import arrow from '../../assets/white_arrow.svg'
import { useState } from 'react'
import PropTypes from 'prop-types'

const CollapseContainer = styled.div`
  width: ${(props) => props.width};
`

const ArrowButton = styled.img`
  transform: ${(props) =>
    props.isClosed ? 'rotateX(180deg)' : 'rotate(0deg)'};
  transition: transform 0.6s ease;
`

const AnswerContainer = styled.div`
  max-height: ${(props) => (props.isClosed ? '0' : '1000px')};
  transition: max-height 0.4s cubic-bezier(0.38, 0, 0.32, 1);
`

const Content = styled.div`
  transform: translateY(${(props) => (props.isClosed ? '-100%' : '0%')});
  transition: transform 0.6s ease;
`

function Collapse({ widthSetted, question, answer }) {
  let [isClosed, setIsClosed] = useState(true)

  return (
    <CollapseContainer className="collapse-container" width={widthSetted}>
      <div
        className="question"
        onClick={() => (isClosed ? setIsClosed(false) : setIsClosed(true))}
      >
        <p>{question}</p>
        <ArrowButton
          src={arrow}
          alt="Flèche déscendante."
          isClosed={isClosed}
        />
      </div>
      <AnswerContainer className="answer-container" isClosed={isClosed}>
        <Content isClosed={isClosed}>{answer}</Content>
      </AnswerContainer>
    </CollapseContainer>
  )
}

Collapse.propTypes = {
  widthSetted: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.node, //'node' means everything that can be rendered
}

export default Collapse
