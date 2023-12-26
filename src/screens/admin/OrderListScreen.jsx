import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';

import { useConfirmOrderMutation, useGetOrdersQuery } from '../../slices/ordersApiSlice';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const [confirmOrder] = useConfirmOrderMutation();
    const navigate = useNavigate();

  const confirmBank = async (orderId) => {
    try {
       await confirmOrder({ order: orderId }).unwrap();
      toast.success('Payment confirmed successfully!');
      navigate(`/orders/${orderId}`)
      // Additional logic after confirming payment
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message || 'Failed to confirm payment. Please try again.');
      // Handle the error and provide feedback to the user
    }
  };

  return (
    <Container dir='ltr'>
           <Navbar bg='light' expand='lg' className='mb-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            
              <Nav.Link active >
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
        
          
            <Nav.Link >
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
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>PAYMENT METHOD</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{ order.name}</td>
                <td>{order.created_at ? order.created_at.substring(0, 10) : ''}</td>
                <td>{order.totalPrice} sar</td>
                <td>
                  {order.isPaid === 1 ? (
 <FaCheck style={{ color: 'green' }} />      
             ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>
                <td>
                    {order.paymentMethod}
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
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
                {order.paymentMethod === 'bank' && order.isPaid === 5 && (
                     <td>
                    
                       <Button variant='success' className='btn-sm' onClick={() => confirmBank(order.id)}>
                         Confirm Payment
                       </Button>
                     
                   </td>
                )} 
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default OrderListScreen;
