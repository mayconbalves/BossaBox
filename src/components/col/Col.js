import React from 'react'
import PropTypes from 'prop-types'
import { Column } from './styled'

const Col = (props) => {
  const { children, xs, md, lg } = props
  return(
    <Column xs={xs} md={md} lg={lg}>
      {children}
    </Column>
  )
}

Col.prototype = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
}

export default Col
