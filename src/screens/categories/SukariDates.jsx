import React from 'react'

import { Container, Row, Col, Card } from 'react-bootstrap';
import { useGetSukariProductsQuery } from '../../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import Loader from '../../components/Loader';
import Meta from '../../components/Meta';
function SukariDates() {

  const { t , i18n } = useTranslation();

    const { data, isLoading, error } = useGetSukariProductsQuery();
    console.log(data);
  return (
    <div>
                      {i18n.language == 'en' ? (
                                <>
                                <Meta title={'Tamrat Dates - Natural and Fresh Sukari Dates'}/>
   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>Sukari Date</span>
 </div>
 </>
    ) : (
      <>
      <Meta title={'تمرات - تمر سكري طبيعي وطازج'}/>
      <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>تمر السكري</span>
    </div>
</>
    )}
      <h1 className="title">{t('sukariTitle')}</h1>
      <Container>
   
        <Row className="py-5">
        {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.products.map((product) => (
            <Col sm={4} key={product.id} className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={product.image_path}
                    alt={product.name_en}
                    className="img-fluid w-50"
                  />
                </div>
                <div className="card-body">
                  <span>{i18n.language === 'en' ? product.name_en :product.name_ar}</span>
                  <br />
                  <span>{i18n.language === 'en' ? product.origin_en :product.origin_ar}</span>
                </div>
                <Link to={`/products/${product.slug}`}>
              <button className="btn-buy mt-4">{t('home4')}</button>
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

export default SukariDates