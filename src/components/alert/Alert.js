import React from 'react'
import PropTypes from 'prop-types'
import { AlertBody, AlertContent, StyledButton } from './styled'

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
