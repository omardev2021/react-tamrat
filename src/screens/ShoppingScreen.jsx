import React from 'react'

import { Container, Row, Col, Card,Badge } from 'react-bootstrap';
import { useGetShoppingProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';


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
              <Card className="product-card">
                {/* Product Image */}
                <div className="card-img position-relative">
                {/* <Badge className="size-badge custom-badge">
  <FontAwesomeIcon icon={faWeightHanging} />
  <span className='mx-2'>كيلو</span>
</Badge> */}
                  <img
                    src={product.image_path}
                    alt={product.name_en}
                    className="img-fluid product-image"
                  />
                </div>
        
                {/* Product Details */}
                <div className="card-body">
                  <h5 className="product-name">{i18n.language === 'en' ? product.name_en : product.name_ar}</h5>
                  <p className="product-origin">{i18n.language === 'en' ? product.origin_en : product.origin_ar}</p>
        
                  {/* Price Section */}
                  <div className="price-section d-flex justify-content-between">
          
                    
 

{
          product.weight === "1.00" ? (
            <>
            <Badge className=" custom-badge">
                    
            <FontAwesomeIcon icon={faWeightHanging} />
            <span className='mx-2'>{t('kg')}</span>
          </Badge>
          <span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

          </>
          ) : product.weight === "0.50" ? (
            <>
            <Badge className=" custom-badge">
                    
            <FontAwesomeIcon icon={faWeightHanging} />
            <span className='mx-2'>{t('half')}</span>
          </Badge>
          <span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

          </>
          ) : product.weight === "0.30" ? (
            <>
            <Badge className=" custom-badge">
                    
            <FontAwesomeIcon icon={faWeightHanging} />
            <span className='mx-2'>{t('seven')}</span>
          </Badge>
          <span style={{'fontWeight':'bold','color':'red'}}>{t('out')}</span>

          </>
          ) : product.weight === "0.10" ? (
            <>
            <Badge className=" custom-badge">
                    
            <FontAwesomeIcon icon={faWeightHanging} />
            <span className='mx-2'>{t('box1')}</span>
          </Badge>
          <span style={{'fontWeight':'bold','color':'red'}}>{t('out')}</span>

          </>
          ) : (
            <>
          <span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

            </>
          )
        }



                  </div>
                </div>
        
                {/* Buy Button */}
                <Link to={`/products/${product.slug}`}>
                  <button className="btn-buy w-100">{t('home4')}</button>
                </Link>
              </Card>
            </Col>
             ))
             )}
        </Row>
      </Container>
    </div>
  )
}

export default ShoppingScreen