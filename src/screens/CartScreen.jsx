import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import { useTranslation } from 'react-i18next';
import AuthModal from '../components/AuthModal';
import { useState } from 'react';
import Meta from '../components/Meta';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t , i18n } = useTranslation();
  const { userInfo } = useSelector((state) => state.auth);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [show ,setShow] = useState(false)

  // NOTE: no need for an async function here as we are not awaiting the
  // resolution of a Promise
  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/shipping');
  };

  return (
    <>
    {
      i18n.language === 'en' ? (
        <Meta title={'Tamrat Dates - Cart Page'} />
      ) : (
        <Meta title={'تمرات - صفحة السلة'} />
      )
    }
    <Row className='p-5'>
      <Col md={8}>
        <h1 style={{ marginBottom: '20px' }}>{t('cart1')}</h1>
        {cartItems.length === 0 ? (
          <Message>
            {t('cart2')} <Link to='/'>{t('back')}</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image_path} alt={item.name_en} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/products/${item.slug}`}>{i18n.language === 'en' ? item.name_en :item.name_ar}</Link>
                  </Col>
                  <Col md={2}>{item.price} {t('sar')}</Col>
                  <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <FaTrash />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                {t('sub')} ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                {t('items')}
              </h2>
                        <h3>
                        {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} 
                   {t('sar')}
                        </h3>
         
            </ListGroup.Item>
            <ListGroup.Item>
              {userInfo ? (
                   <button
                   type='button'
                   id="check"
                   className='btn btn-buy mx-1 mb-2 w-100'
                 
                   onClick={checkoutHandler}
                 >
                   {t('checkout')}
                 </button>
              ):(
<>
          
                <AuthModal show={show} handleClose={()=>setShow(false)}/>
                <button
                type='button'
                id="check"
                className='btn btn-buy mx-1 mb-2 w-100'
             
                onClick={()=>setShow(true)}
              >
            {t('checkout')}
              </button>
              </>
              )}
           

            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  );
};

export default CartScreen;