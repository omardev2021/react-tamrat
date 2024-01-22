import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Row, Col, ListGroup, Image, Card ,Form,Spinner, Container} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';
import { useTranslation } from 'react-i18next';
import { setCoupon , removeCoupon} from '../slices/cartSlice';
import { useCheckMutation } from '../slices/couponApiSlice';
import { FaTrash } from 'react-icons/fa';
import Meta from '../components/Meta';



const PlaceOrderScreen = () => {
  const [couponCode, setCouponCode] = useState('');

  const navigate = useNavigate();
  const { t , i18n } = useTranslation();

  const cart = useSelector((state) => state.cart);
  const {couponInfo} = useSelector((state) => state.coupon);
  
 console.log(couponInfo);
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [check, { isLoading3 }] = useCheckMutation();

  useEffect(() => {
 
 
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    } else if (!userInfo) {
      navigate('/');
    }
  }, [cart.paymentMethod, cart.shippingAddress.address,userInfo, navigate]);

  const handleApplyCoupon = async () => {
    try {
      // Add logic to apply the coupon
      const res = await check({coupon:couponCode}).unwrap();
      dispatch(setCoupon({ ...res }));
      if(i18n.language === 'en') {
        toast.success('coupon applied successfully.');

      } else {
        toast.success('تم تطبيق الكوبون بنجاح');

      }
      // You can add further logic here, e.g., make an API call to validate the coupon
    } catch (error) {
      if(i18n.language === 'en') {
        toast.error('Coupon is incorrect');
 
      } else {
        toast.error('الكوبون غير صحيح');
      }
    }
  };

  const handleRemove = () => {
    dispatch(removeCoupon());
  }

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {

    try {
      const totalWeight = cart.cartItems.reduce((acc, item) => {
        const itemWeight = parseFloat(item.weight) * item.qty;
        return acc + itemWeight;
      }, 0);

      const res = await createOrder({
        orderItems: cart.cartItems,
        address: cart.shippingAddress.address,
        country: cart.shippingAddress.country,
        city: cart.shippingAddress.city,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
        weight:totalWeight,
        discount:cart.discount,
        type:cart.shippingAddress.type,
        name:cart.shippingAddress.type === 'default' ? userInfo.user.name : cart.shippingAddress.name,
        phone:cart.shippingAddress.type === 'default' ? userInfo.user.phone : cart.shippingAddress.phone,
        message:cart.shippingAddress.type === 'gift' ? cart.shippingAddress.message : '' ,

      }).unwrap();

      dispatch(clearCartItems());
      console.log(res);
      navigate(`/orders/${res.order.id}`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      
    }
  };

  return (
    <Container>
         {
      i18n.language === 'en' ? (
        
        <Meta title={'Tamrat Dates - Order Summary'} />
      ) : (
        <Meta title={'تمرات - ملخص الطلب'} />
      )
    }
      <CheckoutSteps step1 step2 step3  />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{t('order1')}</h2>
              <p>
                <strong>{t('order2')}</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>{t('order3')}</h2>
              <strong>{t('order4')} </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>{t('order5')}</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image_path}
                            alt={item.name_en}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name_en}
                          </Link>
                        </Col>
                        <Col md={4} >
                          {item.qty} * {item.price} = 
                          {(item.qty * (item.price * 100)) / 100} {t('sar')}

                          

                        </Col>
                        
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{t('order6')}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>{t('order7')}</Col>
                  <Col>{cart.itemsPrice} {t('sar')}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>{t('order8')}</Col>
                  <Col>{cart.shippingPrice} {t('sar')}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>{t('order9')}</Col>
                  <Col>{cart.discount} {t('sar')}</Col>
                </Row>
              </ListGroup.Item>
              {cart.couponInfo && (
                <>
                   <ListGroup.Item>
                   <Row>
                     <Col>{t('coupon2')}</Col>
                     <Col><span>
                     {cart.couponInfo.coupon_name}
                     </span>
              
                     <Button
                      type='button'
                      variant='light'
                      onClick={handleRemove}
                    >
                      <FaTrash />
                    </Button>
                     
                     </Col>
                   </Row>
                 </ListGroup.Item>
                 </>
              )}
              <ListGroup.Item>
                <Row>
                  <Col>{t('order10')}</Col>
                  <Col>{cart.totalPrice} {t('sar')}</Col>
                </Row>
              </ListGroup.Item>
              
                {error && (
                  <ListGroup.Item>
                  <Message variant='danger'>{error.data.message}</Message>
                             </ListGroup.Item>
                )}
   
              <ListGroup.Item>
        <div className="coupon-input-container">
          <Form>
            <Form.Group controlId="couponCode" className="mb-3">
              <Form.Label className="coupon-label">{t('coupon1')}</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder={t('coupon2')}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                  style={{ borderTopLeftRadius: '0',borderBottomLeftRadius: '0'}}

                />
                {isLoading3 ? (
     
        <Button
        variant="primary"
        
        className="coupon-button"
        style={{ borderTopRightRadius: '0',borderBottomRightRadius: '0'}}

      >
         <Spinner animation="border" role="status">
      </Spinner> 
      </Button>
    
                ) : (
                  <Button
                  variant="primary"
                  onClick={handleApplyCoupon}
                  className="coupon-button"
                  style={{ borderTopRightRadius: '0',borderBottomRightRadius: '0'}}

                >
                  {t('coupon3')}
                </Button>
                )}
             
              </div>
{/* 
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter your coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="coupon-input"
                />
                <Button
                  variant="primary"
                  onClick={handleApplyCoupon}
                  className="coupon-button"
                >
                  Apply Coupon
                </Button>
              </div> */}
            </Form.Group>
          </Form>
        </div>
      </ListGroup.Item>
  
              <ListGroup.Item>
             

                {isLoading ? (
 <button id="check" type='button' className="btn btn-buy mx-1 mb-2 w-100"  >
            
         
 <Spinner animation="border" role="status">
  </Spinner> 
              </button>
                ) : (
                  <button id="check" type='button' className="btn btn-buy mx-1 mb-2 w-100"  onClick={placeOrderHandler} >
                {t('order11')}
                               </button>
                )}
                
                {/* <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                //   onClick={placeOrderHandler}
                >
                  Place Order
                </Button> */}
                {/* {isLoading && <Loader />} */}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrderScreen;