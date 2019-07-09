import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CardBody, StyledButton } from './styled'

import Row from '../row/Row'
import Col from '../col/Col'
import Alert from '../alert/Alert'

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
          hashTags.map(tag => {
            const splitTag = tag.split(' ')
            return splitTag.map(tags => (
              <Col key={tags}>
                #{tags}
              </Col>
            ))
          })
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
