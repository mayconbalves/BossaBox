import styled from 'styled-components'

export const ModalBody = styled.div`
  background: #fff;
  border: 1px solid red;
`

export const ModalContent = styled.div`
  margin: 10px;
  border: 1px solid #000;
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    left: 20px;
    top: -10px;
  }

  input, textarea {
    width: 90%;
    margin: 20px;
    padding: 10px;
  }
`
