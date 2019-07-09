import styled from 'styled-components'

export const StyledButton = styled.button`
  float: right;
  color: #fff;
  width: 174px;
  height: 50px;
  background: #365DF0;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  width: 100%;

  input {
    width: 95%;
    padding: 10px;
    border: 2px solid;
  }
`

export const InputRadio = styled.div`
  input {
    margin: 0 10px;
  }
`
