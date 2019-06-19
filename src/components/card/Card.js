import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import Col from '../col/Col'

const Card = ({ description, handleDeleteTool, id, link, tags, title }) => {
  const hashTags = tags || []
  return (
    <div>
      <Row>
        <Col>
          {title}
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
    </div>
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
