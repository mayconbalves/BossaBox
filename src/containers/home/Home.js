import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as toolsActions from './actions'

import Grid from '../../components/grid/Grid'

class HomeContainer extends Component {

  componentDidMount() {
    const { fetchTools } = this.props

    fetchTools()
  }
  render() {
    console.log(this.props)
    return (
      <Grid>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
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
