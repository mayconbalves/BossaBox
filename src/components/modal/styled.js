import styled from 'styled-components'

export const ModalBody = styled.div`
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 80px;
  display: block;

  h5 {
    margin-left: 15px;
  }
`

export const ModalContent = styled.div`
  background-color: white;
  width: 70%;
  max-width: 640px;
  height: 75%;
  margin: auto;
  padding: 10px;
  border: 3px solid black;
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
    border: 2px solid;
  }
`

export const StyledButton = styled.button`
  float: right;
  color: #fff;
  margin-right: 15px;
  width: 174px;
  height: 50px;
  background: #365DF0;
`
