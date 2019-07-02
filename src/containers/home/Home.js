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
  color: #fff;
  width: 174px;
  height: 50px;
  background: #365DF0;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`

const InputWrapper = styled.div`
  width: 100%;

  input {
    width: 95%;
    padding: 10px;
    border: 2px solid;
  }
`

const InputRadio = styled.div`
  input {
    margin: 0 10px;
  }
`

class HomeContainer extends Component {

  state = { showModal: false }

  componentDidMount() {
    const { fetchTools } = this.props

    fetchTools()
  }

  handleDeleteTool = id => {
    const { fetchDeleteTools } = this.props

    fetchDeleteTools(id)
  }

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }))
  }
  render() {
    const { tools, fetchAddTools } = this.props
    const { showModal } = this.state
    const infos = tools || []

    return (
      <Grid>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <InputWrapper>
              <input
                placeholder='search'
              />
            </InputWrapper>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <InputRadio>
              <input type='checkbox' />
              <label>search in tags only</label>
            </InputRadio>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <StyledButton onClick={this.toggleModal}>+ Add</StyledButton>
          </Col>
        </Row>
        {
          showModal &&
          <Modal fetchAddTools={fetchAddTools} toggleModal={this.toggleModal} />
        }
        <Row>
          {
            infos.map((info) => (
            <Col xs={12} md={12} lg={12} key={info.id}>
              <Card
                description={info.description}
                id={info.id}
                link={info.link}
                tags={info.tagsArray}
                title={info.title}
                handleDeleteTool={this.handleDeleteTool}
              />
            </Col>
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
  fetchAddTools: PropTypes.func.isRequired,
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
