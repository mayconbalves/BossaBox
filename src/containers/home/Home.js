import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as toolsActions from './actions'
import styled from 'styled-components'

import Grid from 'components/grid/Grid'
import Row from 'components/row/Row'
import Col from 'components/col/Col'
import Card from 'components/card/Card'
import Modal from 'components/modal/Modal'

const StyledButton = styled.button`
  float: right;
`

class HomeContainer extends Component {

  state = { showModal: false }

  componentDidMount() {
    const { fetchTools } = this.props

    fetchTools()
  }

  handleDeleteTool = id => {
    const { fetchDeleteTools, fetchTools } = this.props

    fetchDeleteTools(id)
      .then(() => fetchTools())
  }

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }))
  }
  render() {
    const { tools } = this.props
    const { showModal } = this.state
    const infos = tools || []

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
            <StyledButton onClick={this.toggleModal}>+ Add</StyledButton>
          </Col>
        </Row>
        {
          showModal &&
          <Modal />
        }
        <Row>
          {
            infos.map((info) => (
              <Card
                description={info.description}
                key={info.id}
                id={info.id}
                link={info.link}
                tags={info.tags}
                title={info.title}
                handleDeleteTool={this.handleDeleteTool}
              />
            ))
          }
        </Row>
      </Grid>
    )
  }
}

HomeContainer.proptypes = {
  fetchTools: PropTypes.func.isRequired,
  fetchDeleteTools: PropTypes.func.isRequired,
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
