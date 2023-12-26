import React from 'react'
import { Table, Container, Navbar, Nav } from 'react-bootstrap';

import { useGetContactsQuery } from '../../slices/ordersApiSlice';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

function ContactsScreen() {
    const { data: orders, isLoading, error } = useGetContactsQuery();
  
 
  
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
              
          
            <Nav.Link>
            <Link to={'/admin/receipts'}>
                Bank Receipts
                </Link>
                </Nav.Link>

           
         
            <Nav.Link >
            <Link to={'/admin/contacts'}>
                Contact Requests
                </Link>
                </Nav.Link>
        
          
            <Nav.Link active>
            <Link to={'/admin/newsletters'}>
                Newsletter Subscribtions
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
              <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>message</th>
              
            
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                                      <td>{order.name}</td>

                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.content}</td>


             
               
           
             
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    );
}

export default ContactsScreen