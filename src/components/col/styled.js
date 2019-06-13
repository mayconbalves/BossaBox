import styled from 'styled-components'

function getWidth(value){
  if (!value) return

  let width = value / 12 * 100
  return `width: ${width}%`
}

export const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    ${props => props.xs && getWidth(props.xs)}
  }

  @media only screen and (min-width: 768px) {
    ${props => props.md && getWidth(props.md)}
  }

  @media only screen and (min-width: 1000px) {
    ${props => props.lg && getWidth(props.lg)}
  }
`
