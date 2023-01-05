import styled from 'styled-components'

const StyledTag = styled.div`
  min-width: fit-content;
  background: #ff6060;
  color: white;
  font-size: 0.9rem;
  border-radius: 10px;
  padding: 4px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    background: #fa8888;
  }
  &:active {
    background: #fa9999;
  }
`

function Tag({ content }) {
  return <StyledTag>{content}</StyledTag>
}

export default Tag
