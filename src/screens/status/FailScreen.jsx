import { t } from 'i18next';
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import failImage from '../../assets/fail-image.png' // Replace with the actual path to your image

function FailScreen() {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <Image src={failImage} alt="Payment Failed" width={200} fluid />
          <p className="mt-4" style={{ fontSize: '18px' }}>
            {t('fail1')}
          </p>
          <Link to={'/'}>
          <button className="btn-buy mt-3">
            {t('success3')}
          </button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default FailScreen