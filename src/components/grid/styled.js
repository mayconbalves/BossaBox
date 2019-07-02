import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  box-sizing: border-box;
  &:before,
  &:after {
    content: '';
    display: table;
  }
  &:after {
    clear: both;
  }

  @media(max-width: 768px) {
    width: 100%;
    margin: 0 10px;
  }
`
