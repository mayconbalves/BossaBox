import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1360px;
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
`
