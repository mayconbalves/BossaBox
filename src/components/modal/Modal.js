import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ModalBody = styled.div`
  background: #fff;
  border: 1px solid red;
`

class Modal extends Component {
  state = {}

  handleSubmit = () => {
    const { fetchAddTools } = this.props

    fetchAddTools()
  }
  render() {
    return (
      <ModalBody>
        <h1>Modal</h1>
        <div>
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
