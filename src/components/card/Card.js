import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from '../row/Row'
import Col from '../col/Col'

const CardBody = styled.div`
  width: 100%;
  height: 100px;
  border: 2px solid black;
  margin: 15px auto;
`

const Card = ({ description, handleDeleteTool, id, link, tags, title }) => {
  const hashTags = tags || []
  return (
    <CardBody>
      <Row>
        <Col>
          <a href={link}>{title}</a>
        </Col>
        <Col>
          <button onClick={() => handleDeleteTool(id)}>
            x remove
          </button>
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
              {tag}
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
