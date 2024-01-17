import React from 'react'
import { Table, Container, Navbar, Nav } from 'react-bootstrap';

import { useGetReceiptsQuery } from '../../slices/ordersApiSlice';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../constants';

function ReceiptsScreen() {
    const { data: orders, isLoading, error } = useGetReceiptsQuery();
  
 
  
    return (
      <Container dir='ltr'>
            <Navbar bg='light' expand='lg' className='mb-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            
              <Nav.Link  >
              <Link to={'/admin/orderlist'}>
                  orders
                  </Link>
                  </Nav.Link>
              
          
            <Nav.Link active>
            <Link to={'/admin/receipts'}>
                Bank Receipts
                </Link>
                </Nav.Link>

           
         
            <Nav.Link >
            <Link to={'/admin/contacts'}>
                Contact Requests
                </Link>
                </Nav.Link>
        
          
            <Nav.Link >
            <Link to={'/admin/newsletters'}>
                Newsletter Subscribtions
                </Link>
                </Nav.Link>

                <Nav.Link >
            <Link to={'/admin/shippments'}>
                Shippments
                </Link>
                </Nav.Link>
   
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <h1>Orders</h1>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Image path</th>
                <th>Submitted at</th>
            
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.order_id}</td>
                  <td><a href={`${BASE_URL}/storage/images/1700565821.png`} target={'_blank'} rel="noreferrer">show receipt</a></td>
                  <td>{order.created_at ? order.created_at.substring(0, 10) : ''}</td>
                  
             
               
           
             
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    );
}

export default ReceiptsScreen