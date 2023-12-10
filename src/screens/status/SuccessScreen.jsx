import React, { useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useConfirmOrderMutation } from '../../slices/ordersApiSlice';

function SuccessScreen() {
  const { t , i18n } = useTranslation();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const orderApi = queryParams.get('orderApi');
  console.log('orderApi:', orderApi);


  const [confirmOrder, { isLoading, error }] = useConfirmOrderMutation();


const handleConfirmation = async () => {
    try {
      // Add logic to apply the coupon
      const res = await confirmOrder({order:orderApi}).unwrap();
      
      // console.log('coupon applied successfully.');
      // You can add further logic here, e.g., make an API call to validate the coupon
    } catch (error) {
      console.error('Error:', error);
      // Handle the error and provide feedback to the user
      // console.log('Failed to apply coupon. Please try again.');
    }
  };

  useEffect(() => {
    handleConfirmation();
  }, []);


  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <Image src={logo} alt="Payment Failed" width={200} fluid />
          <p className="mt-4" style={{ fontSize: '18px' }}>
            {t('success1')}
          </p>
          <Link to={`/orders/${orderApi}`}>
          <button className="btn-buy mt-3">
          {t('success2')}
          </button>
          </Link>

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

export default SuccessScreen