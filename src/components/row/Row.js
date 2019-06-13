import React from 'react'
import PropTypes from 'prop-types'
import { StyledRow } from './styled'

const Row = (props) => {
  const { children } = props
  return(
    <StyledRow>
      {children}
    </StyledRow>
  )
}

Row.prototype = {
  children: PropTypes.node.isRequired
}

export default Row
