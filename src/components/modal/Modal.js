import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ModalBody, ModalContent, InputWrapper, StyledButton } from './styled'
import Row from 'components/row/Row'
import Col from 'components/col/Col'

class Modal extends Component {
  state = { title: '', link: '', description: '', tags: [] }

  handleChange = e => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { fetchAddTools, toggleModal } = this.props
    const { title, link, description, tags } = this.state

    const tagsArray = []
    tagsArray.push(tags)

    const params = {
      title,
      link,
      description,
      tagsArray
    }

    fetchAddTools(params)
    toggleModal()
  }
  render() {
    const { title, link, description, tags } = this.state

    return (
      <ModalBody>
        <ModalContent>
          <Row>
            <h5>+ Add new tool</h5>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <InputWrapper>
                <label>Tool Name</label>
                <input
                  type='text'
                  name='title'
                  value={title}
                  onChange={this.handleChange}
                  required
                />
              </InputWrapper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <InputWrapper>
                <label>Tool Link</label>
                <input
                  type='text'
                  name='link'
                  value={link}
                  onChange={this.handleChange}
                  required
                />
              </InputWrapper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <InputWrapper>
                <label>Tool Description</label>
                <textarea
                  rows='4'
                  cols='30'
                  name='description'
                  value={description}
                  onChange={this.handleChange}
                  required
                />
              </InputWrapper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <InputWrapper>
                <label>Tags</label>
                <input
                  name='tags'
                  value={tags}
                  onChange={this.handleChange}
                  required
                />
              </InputWrapper>
            </Col>
          </Row>
          <Row>
            <StyledButton onClick={this.handleSubmit}>Add Tools</StyledButton>
          </Row>
        </ModalContent>
      </ModalBody>
    )
  }
}

Modal.propTypes = {
  fetchAddTools: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
}

export default Modal
