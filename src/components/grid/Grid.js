import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './styled'

const Grid = (props) => {
  const { children } = props
  return(
    <Container>
      {children}
    </Container>
  )
}

Grid.prototype = {
  children: PropTypes.node.isRequired
}

export default Grid
