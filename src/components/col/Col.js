import React from 'react'
import PropTypes from 'prop-types'
import { Column } from './styled'

const Col = ({ children, lg, md, xs  }) => (
  <Column lg={lg} md={md} xs={xs}>
    {children}
  </Column>
)

Col.prototype = {
  children: PropTypes.node.isRequired,
  lg: PropTypes.number,
  md: PropTypes.number,
  xs: PropTypes.number
}

export default Col
