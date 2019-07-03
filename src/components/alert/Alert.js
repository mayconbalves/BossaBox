import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AlertBody = styled.div`
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

const AlertContent = styled.div`
  background-color: white;
  width: 70%;
  max-width: 640px;
  height: 30%;
  margin: auto;
  padding: 10px;
  border: 3px solid black;
`

const StyledButton = styled.button`
  color: #fff;
  margin-right: 15px;
  width: 174px;
  height: 50px;
  background: #365DF0;
`

const Alert = (props) => {
  const { handleDeleteTool, setAlert, id, tool } = props
  return (
    <AlertBody>
      <AlertContent>
        <h4>x Remove tool</h4>
        <p>Are you sure wnat to remove {tool} ?</p>
        <StyledButton onClick={() => setAlert(false)}>Cancel</StyledButton>
        <StyledButton onClick={() => handleDeleteTool(id)}>Yes, remove</StyledButton>
      </AlertContent>
    </AlertBody>
  )
}

Alert.propTypes = {
  handleDeleteTool: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  tool: PropTypes.string.isRequired
}

export default Alert
