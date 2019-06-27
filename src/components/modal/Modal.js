import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from 'components/row/Row'
import Col from 'components/col/Col'

const ModalBody = styled.div`
  background: #fff;
  border: 1px solid red;
`

const ModalContent = styled.div`
  margin: 10px;
  border: 1px solid #000;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  label {
    position: absolute;
    left: 20px;
    top: -10px;
  }

  input, textarea {
    width: 90%;
    margin: 20px;
    padding: 10px;
  }
`

class Modal extends Component {
  state = { title: '', link: '', description: '', tags: [] }

  handleChange = e => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { fetchAddTools } = this.props
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
  }
  render() {
    const { title, link, description, tags } = this.state
    return (
      <ModalBody>
        <ModalContent>
        <h4>+ Add new tool</h4>
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
          <button onClick={this.handleSubmit}>Add Tools</button>
        </ModalContent>
      </ModalBody>
    )
  }
}

Modal.propTypes = {
  fetchAddTools: PropTypes.func.isRequired
}

export default Modal
