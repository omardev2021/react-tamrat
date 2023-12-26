import React, { useEffect } from 'react';
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {  useSelector } from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';

import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import {FaTimes , FaCheck} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';

const ProfileScreen = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    const { t , i18n } = useTranslation();

    const navigate = useNavigate();
  
    const { userInfo } = useSelector((state) => state.auth);
    const { data: orders, isLoading, error } = useGetMyOrdersQuery();
    console.log(orders);
  
    useEffect(() => {
      if(!userInfo) {
        navigate('/')
      }
      // setName(userInfo.name);
      // setEmail(userInfo.email);
      // setPhone(userInfo.phone);
    }, [userInfo,navigate]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log('submit');
    };
  
    return (
      <Container>
        {i18n.language === 'en' ? (
          <Meta title={'Tamrat Dates - Account Page'} />
        ) : (
<Meta title={'تمرات - صفحة الحساب'} />
        )}
      <Row>
        <Col md={3}>
          <h2>{t('account1')}</h2>
  
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='name'>
              <Form.Label>{t('account2')}</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={userInfo.user.name || ''}
                disabled
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
  
            <Form.Group className='my-2' controlId='email'>
              <Form.Label>{t('account3')}</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={userInfo.user.email || ''}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='name'>
              <Form.Label>{t('account4')}</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter phone'
                value={userInfo.user.phone || ''}
                disabled
              ></Form.Control>
            </Form.Group>
            
  
           
  
            
  
            {/* <Button type='submit' variant='primary'>
              Update
            </Button> */}
          </Form>
        </Col>
        <Col md={9}>
  <h2>{t('account5')}</h2>
  {isLoading ? (
    <Loader />
  ) : error ? (
    <div>
      {error?.data?.message || error.error}
    </div>
  ) : orders.length === 0 ? (
   <Message variant={'info'}>{t('noOrders')}</Message>
  ) : (
    <Table striped table hover responsive className='table-sm'>
      <thead>
        <tr>
          <th>ID</th>
          <th>{t('pr1')}</th>
          <th>{t('pr2')}</th>
          <th>{t('pr3')}</th>
          <th>{t('pr4')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            
            <td>{order.created_at ? order.created_at.substring(0, 10) : ''}</td>

            <td>{order.totalPrice}</td>
            <td>
              {order.isPaid === 1 ? (
                <FaCheck style={{ color: 'green' }} />
              ) : (
                 <FaTimes style={{ color: 'red' }} />
              )}
            </td>
            <td>
              {order.isDelivered === 1 ? (
                <FaCheck style={{ color: 'green' }} />
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}
            </td>
            <td>
              <LinkContainer to={`/orders/${order.id}`}>
                <Button className='btn-sm' variant='light'>
                {t('pr5')}
                </Button>
              </LinkContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )}
</Col>
      </Row>
      </Container>
    );
  };
  
  export default ProfileScreen;