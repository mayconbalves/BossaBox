import styled from 'styled-components'

export const AlertBody = styled.div`
  background-color: rgba(0,0,0,0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 20%;
  display: block;

  h5 {
    margin-left: 15px;
  }
`

export const AlertContent = styled.div`
  background-color: white;
  width: 70%;
  max-width: 640px;
  height: 30%;
  margin: auto;
  padding: 10px;
  border: 3px solid black;
`

export const StyledButton = styled.button`
  color: #fff;
  margin-right: 15px;
  width: 174px;
  height: 50px;
  background: #365DF0;
  float: right;
`
