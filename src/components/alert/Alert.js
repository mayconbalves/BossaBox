import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

const Alert = ({ handleDeleteTool, setAlert, id, tool }) => (
  <S.AlertBody>
    <S.AlertContent>
      <h4>x Remove tool</h4>
      <p>Are you sure wnat to remove {tool} ?</p>
      <S.Button onClick={() => setAlert(false)}>Cancel</S.Button>
      <S.Button onClick={() => handleDeleteTool(id)}>Yes, remove</S.Button>
    </S.AlertContent>
  </S.AlertBody>
)

Alert.propTypes = {
  handleDeleteTool: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  tool: PropTypes.string.isRequired
}

export default Alert
