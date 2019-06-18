import React from 'react'
import PropTypes from 'prop-types'

import Row from '../row/Row'
import Col from '../col/Col'

const Card = ({ description, link, tags, title }) => {
  const hashTags = tags || []
  return (
    <div>
      <Row>
        <Col>
          {title}
        </Col>
        <Col>
          <button>
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
  link: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired
}

export default Card
