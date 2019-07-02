import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from '../row/Row'
import Col from '../col/Col'
import Alert from '../alert/Alert'

const CardBody = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid black;
  margin: 15px auto;
`

const StyledButton = styled.button`
  float: right;
  color: #365DF0;
  width: 122px;
  height: 23px;
  font-size: 18px;
  cursor: pointer;
  background: transparent;
  border: none;
`

const Card = ({ description, handleDeleteTool, id, link, tags, title }) => {
  const [showAlert, setAlert] = useState(false)
  const hashTags = tags || []

  return (
    <CardBody>
      {
        showAlert &&
        <Alert
          handleDeleteTool={handleDeleteTool}
          setAlert={setAlert}
          id={id}
          tool={title}
        />
      }
      <Row>
        <Col xs={6} md={8} lg={8}>
          <a href={link}>{title}</a>
        </Col>
        <Col xs={6} md={4} lg={4}>
          <StyledButton onClick={() => setAlert(true)}>
            x remove
          </StyledButton>
        </Col>
      </Row>
      <Row>
        <Col>
          {description}
        </Col>
      </Row>
      <Row>
        {
          hashTags.map(tag => (
            <Col key={tag}>
              #{tag}
            </Col>
          ))
        }
      </Row>
    </CardBody>
  )
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  handleDeleteTool: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default Card
