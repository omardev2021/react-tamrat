import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import size1 from '../assets/size1.png';
import size2 from '../assets/size2.png';
import size3 from '../assets/size3.png';
import size4 from '../assets/size4.png';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';

const SizesScreen = () => {
  const { t , i18n } = useTranslation();


  return (
    <>
    {i18n.language == 'en' ? (
      <>
      <Meta title={'Tamrat Dates- Date Packages'}/>
   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>Dates Sizes</span>
 </div>
 </>
    ) : (
      <>
      <Meta title={'تمرات - تمور بأحجام مختلفة'} />
      <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>احجام علب التمور</span>
    </div>
</>
    )}
 
    <Container dir="ltr">
              <h1 className="title">{t('sizePage')}</h1>

    <Row className="py-5 text-center">
    <Col sm={6}  className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={size2}
                    // alt={product.name_en}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="card-body">
                  <span>{t('kg')}</span>
                  <br />
                  <span>70 - 80 {t('sar')}</span>
                </div>
           
              </Card>
            </Col>
            <Col sm={6}  className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={size1}
                    // alt={product.name_en}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="card-body">
                  <span>{t('half')}</span>
                  <br />
                  <span>30 - 40 {t('sar')}</span>
                </div>
           
              </Card>
            </Col>

            <Col sm={6}  className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={size3}
                    // alt={product.name_en}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="card-body">
                  <span>{t('seven')}</span>
                  <br />
                  <span>10 - 20 {t('sar')}</span>
                </div>
           
              </Card>
            </Col>

            <Col sm={6}  className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={size4}
                    // alt={product.name_en}
                    className="img-fluid w-100"
                  />
                </div>
                <div className="card-body">
                  <span>{t('box')}</span>
                  <br />
                  <span>5 - 10 {t('sar')}</span>
                </div>
           
              </Card>
            </Col>
 
    </Row>
  </Container>
  </>
  );
};

export default SizesScreen;