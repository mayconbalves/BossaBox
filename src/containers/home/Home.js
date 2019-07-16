import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as toolsActions from './actions'

import Grid from 'components/grid/Grid'
import Row from 'components/row/Row'
import Col from 'components/col/Col'
import Card from 'components/card/Card'
import Modal from 'components/modal/Modal'
import { StyledButton, InputWrapper, InputRadio } from './styled'

class HomeContainer extends Component {

  state = { showModal: false, value: '' }

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

  handleChange = event => {
    event.preventDefault()

    this.setState({ value: event.target.value })
  }

  handleKeyPress = event => {
    const { fetchSearchTools, fetchSearchToolsByTag } = this.props
    const { value } = this.state
    let inputTag = document.getElementById('search-by-tag')
    if(event.key === 'Enter') {
      if(inputTag.checked) {
        fetchSearchToolsByTag(value)
      } else {
        fetchSearchTools(value)
      }
    }
  }

  render() {
    const { tools, fetchAddTools } = this.props
    const { showModal, value } = this.state
    const infos = tools || []

    return (
      <Grid>
        <h1>VUTTR</h1>
        <p>Very Useful Tools to Remember</p>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <InputWrapper>
              <input
                onKeyPress={this.handleKeyPress}
                placeholder='search'
                onChange={this.handleChange}
                value={value}
              />
            </InputWrapper>
          </Col>
          <Col xs={12} md={12} lg={4}>
            <InputRadio>
              <input
                id='search-by-tag'
                type='checkbox'
                onKeyPress={this.handleKeyPress}
              />
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
  fetchSearchTools: PropTypes.func.isRequired,
  fetchTools: PropTypes.func.isRequired,
  fetchDeleteTools: PropTypes.func.isRequired,
  fetchAddTools: PropTypes.func.isRequired,
  fetchSearchToolsByTag: PropTypes.func.isRequired,
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
