import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice';
import {FaTimes , FaCheck} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const ProfileScreen = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
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
    }, [userInfo]);
  
    const submitHandler = async (e) => {
      e.preventDefault();
      console.log('submit');
    };
  
    return (
      <Container>
      <Row>
        <Col md={3}>
          <h2>User Profile</h2>
  
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={userInfo.user.name || ''}
                disabled
                // onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
  
            <Form.Group className='my-2' controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={userInfo.user.email || ''}
                disabled
              ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='name'>
              <Form.Label>Phone</Form.Label>
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
  <h2>My Orders</h2>
  {isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>
      {error?.data?.message || error.error}
    </div>
  ) : orders.length === 0 ? (
   <Message variant={'info'}>There is no orders yet.</Message>
  ) : (
    <Table striped table hover responsive className='table-sm'>
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TOTAL</th>
          <th>PAID</th>
          <th>DELIVERED</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.created_at}</td>
            <td>{order.totalPrice}</td>
            <td>
              {order.isPaid == 1 ? (
                <FaCheck style={{ color: 'green' }} />
              ) : (
                 <FaTimes style={{ color: 'red' }} />
              )}
            </td>
            <td>
              {order.isDelivered == 1 ? (
                <FaCheck style={{ color: 'green' }} />
                ) : (
                  <FaTimes style={{ color: 'red' }} />
                )}
            </td>
            <td>
              <LinkContainer to={`/orders/${order.id}`}>
                <Button className='btn-sm' variant='light'>
                  Details
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