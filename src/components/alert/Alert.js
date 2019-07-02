import React from 'react'
import PropTypes from 'prop-types'

const Alert = (props) => {
  const { handleDeleteTool, setAlert, id, tool } = props
  return (
    <div>
      <h4>x Remove tool</h4>
    <p>Are you sure wnat to remove {tool}</p>
    <button onClick={() => setAlert(false)}>Cancel</button>
    <button onClick={() => handleDeleteTool(id)}>Yes, remove</button>
    </div>
  )
}

Alert.propTypes = {
  handleDeleteTool: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  tool: PropTypes.string.isRequired
}

export default Alert
