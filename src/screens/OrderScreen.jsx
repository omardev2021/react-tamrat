import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card ,Spinner, Container} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice';
import { usePayOrderMutation } from '../slices/ordersApiSlice';
import Meta from '../components/Meta';
import { BASE_URL } from '../constants';

import jsPDF from 'jspdf';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import {  useSelector } from 'react-redux';
import logo from '../assets/logo.png'
import { FaDownload } from 'react-icons/fa';
import { useEffect } from 'react';
const OrderScreen = () => {
  const { id: orderId } = useParams();
  const cart = useSelector((state) => state.cart);
  const {userInfo} = useSelector((state) => state.auth);
  const [selectedImage, setSelectedImage] = useState(null);
  const { t , i18n } = useTranslation();

  const {
    data: order,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading:isLoading2 }] = usePayOrderMutation();


const navigate = useNavigate()
  useEffect(() => {
    if (order && userInfo.user.id !== order.order.user_id && userInfo.user.type !== 13) {
      // Navigate to the home page
      navigate('/');
    }
  }, [userInfo, order, navigate]);


  const handleImageChange = (event) => {
    // Handle the image change and update the state
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const generateInvoice = () => {
    // Create a new instance of jsPDF
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.width;
  const pdfHeight = pdf.internal.pageSize.height;

    pdf.addImage(logo, 'PNG', 80, 10, 50, 50); // Adjust the coordinates and size as needed

  // Add user information
  pdf.text('Invoice', 10, 70);
  pdf.text(`Order ID: ${order.order.id}`, 10, 80);
  pdf.text(`Name: ${order.order.name}`, 10, 90);
  pdf.text(`Email: ${order.order.email}`, 10, 100);

  pdf.line(10, 110, pdfWidth - 10, 110);

  pdf.text(`Payment Method`, 10, 130);
  pdf.text(`${order.order.paymentMethod}`, 10, 140);

  pdf.line(10, 150, pdfWidth - 10, 150);

  // Add order items if available
  let yPos = 170; // Declare yPos here
  if (order.orderItems && order.orderItems.length > 0) {
    pdf.text('Order Items', 10, yPos);
    order.orderItems.forEach((item) => {

      pdf.text(`${item.product.name_en} x ${item.qty} - ${item.product.price} SAR each`, 10, yPos + 10);
      
      yPos += 10;
      pdf.line(10, yPos+5, pdfWidth - 10, yPos+5);

    });
  }

  // Add order summary
  
  pdf.text(`Items Price: ${order.order.itemsPrice} SAR`, 130, yPos + 20);
  pdf.text(`Shipping Price: ${order.order.shippingPrice} SAR`, 130, yPos + 30);
  pdf.text(`Discount: ${order.order.discount} SAR`, 130, yPos + 40);
  pdf.text(`Total Price: ${order.order.totalPrice} SAR`, 130, yPos + 50);

  pdf.save(`invoice_${order.order.id}.pdf`);
  };

  const payHandler = async () => {
    try {
      
      const res = await payOrder({
        orderId
      }).unwrap();
console.log(res)
      window.location.href = res.Data.invoiceURL;
      console.log(res.Data.invoiceURL);
      
    } catch (err) {
      toast.error(err);
      
    }
  }

  const handleUpload =async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('order', order.order.id);
    axios.post(`${BASE_URL}/api/upload-image`, formData)
        .then(response => {
            console.log(response.data.message);
            toast.success('receipt submitted successfully')
            window.location.reload();
        })
        .catch(error => {
            console.error(error);
        });
};




  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error.data}</Message>
  ) : (
    <Container>
        {
      i18n.language === 'en' ? (
        
        <Meta title={'Tamrat Dates - Order Page'} />
      ) : (
        <Meta title={'تمرات - صفحة الطلب'} />
      )
    }
      <h1>{t('place1')} #{order.order.id}</h1>
      <Row>
        <Col md={8}>
        <ListGroup variant='flush'>
  <ListGroup.Item>
    <h2>{t('place2')}</h2>
    <p>
      <strong>{t('place3')} </strong> {order.order.name}
    </p>
    <p>
      <strong>{t('place4')} </strong>{' '}
      <a href={`mailto:${order.order.id}`}>{order.order.email}</a>
    </p>
    <p>
      <strong>{t('place5')}</strong>
      {order.order.address}, {order.order.city} , {order.order.country}
    </p>
    <p>
      <strong>{t('orderType')}</strong>
      <br />
      {order.order.type === 'default' ? t('de') : order.order.type === 'someone' ? t('de1') : order.order.type === 'gift' ? t('de2') : ''  }
    </p>
    {order.order.type ==='gift' && (
      <p>
      <strong>{t('GiftMessage')}</strong>
      <br />
      {order.order.message}
    </p>
    )}
    
    {order.order.isDelivered === 1 ? (
      <Message variant='success'>{t('delDone')}</Message>
    ) : order.order.isDelivered === 5 ? (
      <Message variant='success'>{t('place120')}</Message>
    ) : (
      <Message variant='danger'>{t('place6')}</Message>
    )}
  </ListGroup.Item>

  <ListGroup.Item>
    <h2>{t('place7')}</h2>
    <p>
      <strong>{t('place8')} </strong>
      {order.order.paymentMethod}
    </p>
    {cart.paymentMethod === 'bank' && (
        <Row style={{ padding: '20px' }}>
        <Col sm={3}>
          <h5 className="mt-4">{t('bankName')}</h5>
          <p>{t('sabb')}</p>
        </Col>
  
        <Col sm={3}>
          <h5 className="mt-4">{t('bankCode')}</h5>
          <p>{t('sabbSari')}</p>
        </Col>
  
        <Col sm={3}>
          <h5 className="mt-4">{t('accountNumber')}</h5>
          <p>035-397892-001</p>
        </Col>
  
        <Col sm={3}>
          <h5 className="mt-4">{t('ibanNumber')}</h5>
          <p>SA4845000000035397892002</p>
        </Col>
      </Row>
    )}
{order.order.isPaid === 1 ? (
  <Message variant='success'>{t('paidDone')}</Message>
) : order.order.isPaid === 5 ? (
  <div>
    {/* Your content for isPaid equal to 5 goes here */}
    <Message variant='warning'>{t('war')}</Message>
  </div>
) : (
  <Message variant='danger'>{t('place9')}</Message>
)}

    
  </ListGroup.Item>

  <ListGroup.Item>
    <h2>{t('place10')}</h2>
    {order.orderItems.length === 0 ? (
      <Message>Order is empty</Message>
    ) : (
      <ListGroup variant='flush'>
        {order.orderItems.map((item, index) => (
          <ListGroup.Item key={index}>
            <Row>
              <Col md={1}>
                <Image src={`${item.product.image_path}`} alt={item.name_en} fluid rounded />
              </Col>
              <Col>
                <Link to={`/product/${item.id}`}>{i18n.language === 'en' ? item.product.name_en : item.product.name_ar}</Link>
              </Col>
              <Col md={4}>
                {item.qty} * {item.price} {t('sar')}= {item.qty * item.price} {t('sar')}
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
        <Col>{order.order.itemsPrice} {t('sar')}</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
      <Row>
      <Col>{t('order8')}</Col>
        <Col>{order.order.shippingPrice} {t('sar')}</Col>
      </Row>
    </ListGroup.Item>
    <ListGroup.Item>
                <Row>
                  <Col>{t('order9')}</Col>
                  <Col>{order.order.discount} {t('sar')}</Col>
                </Row>
              </ListGroup.Item>

    <ListGroup.Item>
      <Row>
        <Col>{t('order10')}</Col>
        <Col>{order.order.totalPrice} {t('sar')}</Col>
      </Row>
    </ListGroup.Item>
   {order.order.isPaid === 0 && (
     <>
           {order.order.paymentMethod === 'bank' ? (
           <ListGroup.Item>
                    
           {isLoading2 ? (
<button id="check" type='button' className="btn btn-buy mx-1 mb-2 w-100"  >
       
    
<Spinner animation="border" role="status">
</Spinner> 
         </button>
           ) : (
             <>
         <label htmlFor="imageUpload" className="custom-file-upload mb-2"   style={{
          border: '1px solid #ccc',
          display: 'inline-block',
          padding: '6px 12px',
          cursor: 'pointer',
          borderRadius: '4px',
        }}>
           {t('reImage')}
      </label>
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
    
          {/* Button for placing orders */}
          <button
            id="check"
            type="button"
            className="btn btn-buy mx-1 mb-2 w-100"
            onClick={handleUpload}
          >
            {t('sumbitRe')}
          </button>
          </>
           )}
</ListGroup.Item>
                  ) : (
                    <ListGroup.Item>
                    
                           {isLoading2 ? (
            <button id="check" type='button' className="btn btn-buy mx-1 mb-2 w-100"  >
                       
                    
            <Spinner animation="border" role="status">
             </Spinner> 
                         </button>
                           ) : (
                             <button id="check" type='button' className="btn btn-buy mx-1 mb-2 w-100"  onClick={payHandler} >
                          {t('payConfirm')}
                                          </button>
                           )}
               </ListGroup.Item>
                  )}
     </>
   )}

            

    {/* PAY ORDER PLACEHOLDER */}
    {/* {MARK AS DELIVERED PLACEHOLDER} */}
    {
      order.order.isPaid === 1 && (
        <ListGroup.Item>
                    
 
<button id="check" type='button' onClick={generateInvoice} className="btn btn-buy mx-1 mb-2 w-100"><FaDownload className='mx-2'/>{t('download')}</button>
</ListGroup.Item>
      )
    }

  </ListGroup>
</Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;