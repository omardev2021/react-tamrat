import React from 'react'

import { Container, Row, Col} from 'react-bootstrap';
import { useGetAjwaProductsQuery } from '../../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import Meta from '../../components/Meta';

import ShoppingProduct from '../../components/ShoppingProduct';



function AjwaDates() {
  const { t , i18n } = useTranslation();


    const { data, isLoading, error } = useGetAjwaProductsQuery();
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
  <Meta title={'Tamrat Dates - Organic Ajwa Al Madina Dates'}/>

   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>Ajwa Date</span>
 </div>
 </>
    ) : (
      <>
        <Meta title={'تمرات - تمور عجوة المدينة عضوي'}/>

      <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>تمر العجوة</span>
    </div>
    </>
    )}
      <h1 className="title">{t('ajwaTitle')}</h1>
      <Container>
   
        <Row className="py-5">
        { error ? (
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

export default AjwaDates