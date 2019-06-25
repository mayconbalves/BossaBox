import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalBody = styled.div`
  background: #fff;
  border: 1px solid red;
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
        <h1>Modal</h1>
        <div>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.handleChange}
            required
          />
          <input
            type='text'
            name='link'
            value={link}
            onChange={this.handleChange}
            required
          />
          <input
            name='description'
            value={description}
            onChange={this.handleChange}
            required
          />
          <input
            name='tags'
            value={tags}
            onChange={this.handleChange}
            required
          />
          <button onClick={this.handleSubmit}>Add Tools</button>
        </div>
      </ModalBody>
    )
  }
}

Modal.propTypes = {
  fetchAddTools: PropTypes.func.isRequired
}

export default Modal
