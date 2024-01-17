import React  from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { useGetShoppingProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';
import Skeleton from 'react-loading-skeleton';

import ShoppingProduct from '../components/ShoppingProduct';


function ShoppingScreen() {

  const { t , i18n } = useTranslation();

  const { data, isLoading, error } = useGetShoppingProductsQuery();
  

  if(isLoading) {
    return(
    <div>
 <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
 <Skeleton width={150} /> 
 </div>
  
    <h1 className="title">
       <Skeleton width={150} /> 
    </h1>
    
      <Row className="py-5">

      <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
              <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
              <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
              <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
              <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
              <Col sm={4} className="mb-2">
                <Skeleton height={250} width={350} />
              </Col>
      
      </Row>
    
  </div>
    )
  }

  return (
    <div>
     
       {i18n.language === 'en' ? (
         <>
           <Meta title={'Tamrat Dates - High Quality Dates'}/>
       
   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>All Dates</span>
 </div>
 </>
    ) : (
      <>
         <Meta title={'تمرات - تمور عالية الجودة'}/>
      <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>جميع التمور</span>
    </div>
</>
    )}
      <h1 className="title">{t('header24')}</h1>
      <Container>
    
        <Row className="py-5">
        {isLoading ? (
        <div></div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.products.map((product) => (
              <Col sm={4} key={product.id} className='mb-4 p-4'>
              <ShoppingProduct product={product} />
            </Col>
             ))
             )}
        </Row>
      </Container>
    </div>
  )
}

export default ShoppingScreen