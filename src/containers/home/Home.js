import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as toolsActions from './actions'
import styled from 'styled-components'

import Grid from '../../components/grid/Grid'
import Row from '../../components/row/Row'
import Col from '../../components/col/Col'

const StyledButton = styled.button`
  float: right;
`

class HomeContainer extends Component {

  componentDidMount() {
    const { fetchTools } = this.props

    fetchTools()
  }
  render() {
    return (
      <Grid>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
        <Row>
          <Col xs={3} md={3} lg={3}>
            <input />
          </Col>
          <Col xs={3} md={3} lg={3}>
            <input />
          </Col>
          <Col xs={6} md={6} lg={6}>
            <StyledButton>+ Add</StyledButton>
          </Col>
        </Row>
      </Grid>
    )
  }
}

HomeContainer.proptypes = {
  fetchTools: PropTypes.func.isRequired,
  tools: PropTypes.array.isRequired
}

const mapStateToProps = ({ homeReducer }) => {
  return {
    tools: homeReducer.tools
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(toolsActions, dispatch)
}

export { HomeContainer as Home }

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
