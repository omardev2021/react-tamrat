
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Loader from '../components/Loader';
import React, { useState } from 'react';
import fruit from '../assets/fruit-date-boxes.webp'
import string from '../assets/string-of-fruit-dates.webp'
import palm from '../assets/palm-icon.webp'
import generosity from '../assets/generosity-icon.webp'
import friutdate from '../assets/friutdate-icon.webp'
import { toast } from 'react-toastify';
import { Spinner } from 'react-bootstrap';
import star from '../assets/star-icon.webp'
import dates from '../assets/fruit-dates.webp'
import friutdatesicon from '../assets/fruit-date-icon.webp'
import gift from '../assets/fruit-dates-gift.webp'

import fiber from '../assets/fiber-icon.webp'
import gluten from '../assets/gluten-icon.webp'
import antiocidant from '../assets/antiocidant-icon.webp'
import natrual from '../assets/natrual-icon.webp'
import Product from '../components/Product';
import { useTranslation } from 'react-i18next';
import FAQSection from '../components/FAQSection';
import Meta from '../components/Meta';
import {  useNewsletterMutation} from '../slices/usersApiSlice';


const HomeScreen = () => {
    const { t , i18n } = useTranslation();

    const { data, isLoading, error } = useGetProductsQuery();
    const [newsLetter, { isLoading:isLoading2 }] = useNewsletterMutation();
    const [email,setEmail] = useState('')

    const letterHandler = async (e) => {
        e.preventDefault()
        try {
      
            const res = await newsLetter({
              email
            }).unwrap();
      console.log(res)
          
      toast.success(res);   

          } catch (err) {
            toast.error('You have already subscribed to our newsletter');
           
            
          }
    }
   
    if (isLoading) {
        // Skeleton loader while data is loading
        return (
          <Container fluid className="mt-5">
            <Row>
              <Col sm={6} className="mb-2">
                <Skeleton height={400} width={600} />
              </Col>
              <Col sm={6} className="mb-2">
                <Skeleton height={400} width={600} />
              </Col>
              {/* <Col sm={6} className="text-center">
                <div>
                  <h1 className="logo-text" style={{ color: '#7C9D64' }}>
                    <Skeleton width={100} />
                  </h1>
                  <p className="" style={{ fontSize: '20px' }}>
                    <Skeleton count={4} />
                  </p>
                  <Skeleton width={100} height={40} />
                </div>
              </Col> */}
            </Row>
          </Container>
        );
      }
        
  return (
    <>
    <Meta title={t('metaTitle')} description={t('metaDes')}/>
   <Container fluid className="mt-5">

       
            <Row>
                <Col sm={12} md={6}  className="mb-2">
                    <Image src={fruit} alt="tamrat" fluid />
                </Col>
                <Col sm={12} md={6} className="text-center">
                    <div>
                        <h1 className="logo-text" style={{ color: '#7C9D64' }}>{t('main')}</h1>
                        {i18n.language === 'ar' ? (
                            <p className="py-2 mb-3" style={{ fontSize: '20px',textAlign: 'right' }}>
                            نقدم تشكيلة واسعة من التمور الأصلية بجودة عالية. تصفح موقعنا الآن للاطلاع<br /> على تشكيلتنا المتنوعة من التمور، بما في ذلك التمور السكرية وتمور العجوة وتمر الخلاص وغيرها الكثير. تتوفر لدينا خدمة التوصيل السريع إلى جميع أنحاء العالم، ونضمن لك جودة تمورنا في جميع الأوقات. تسوق الآن واحصل على أفضل التمور


                            </p>
                        ) : (
                           

<p className="py-2 mb-3" style={{ fontSize: '20px', textAlign: 'left' }}>

    We offer a wide variety of high-quality original dates.
 
    Browse our website now to explore our diverse collection of dates, including Sukkari dates, Ajwa dates, Khlas dates, and many more. We provide fast delivery service to all parts of the world, and we guarantee the quality of our dates at all times. Shop now and get the best dates.
 
</p>
                        )}
                    
                    <Link to={'/shopping'}>
                        <button className="btn-shop text-center a-link" style={{ marginTop: '0px' }}>
                        {t('main3')}
                        </button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>


        <section className="container best-seller">
            <h1 className="title">
            {t('home1')} <br />
            {i18n.language === 'en' &&
            (
                <>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}> {t('home2')}</span>
                <hr style={{ opacity: 1, color: '#DAB155', width: '100px', margin: 'auto', height: '8px', borderWidth: '5px' }} /><br />
                </>
            )
            }
            </h1>

            <Row className="pb-3">
            {isLoading ? (
        <Loader />
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            data.products.map((product) => (
               
             <Product product={product} key={product.id} />
          
                ))
                )}
           
            </Row>
        </section>
        <section className="section-three text-center ">
            <Container>
                <Link to={'/shopping'} style={{ color: '#7C9D64' }}>
                    <button className="btn btn-btn a-link" style={{marginTop:'3%',marginLeft:'10%'}}> {t('home6')}</button>
                </Link>
            </Container>
        </section>

        <section>
            <Container fluid className="mt-5">
                <Row>
                    <Col sm={12} md={6} className="mb-2">
                        <Image src={string} alt="string of fresh dates" fluid />
                    </Col>
                    <Col sm={12} md={6} className="container text-center" style={{ alignSelf: 'center' }}>
                        <div>
                            <h1 className="logo-text" style={{ color: '#7C9D64' }}>{t('home7')}</h1>
                            <p className="py-2 mb-3" style={{ fontSize: '20px' }}>
                            {t('home8')}                            </p>
                            <Link to={'/shopping'}>
                            <button className="btn-shop text-center a-link" style={{ marginTop: '0px' }}>
                            {t('home9')}
                            </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="container text-center">
            <h1 className="title" style={{ color: 'black' }}>{t('home10')}</h1>
            <Row>
                <Col sm={12} md={4}>
                    <Image src={palm} alt="palm icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home11')}</h3>
                </Col>
                <Col sm={12} md={4}>
                    <Image src={generosity} alt="generosity icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home13')}</h3>
                </Col>
                <Col sm={12} md={4}>
                    <Image src={friutdate} alt="nutrient icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home14')}</h3>
                </Col>
            </Row>
        
            <Link to={'/shopping'}>
                            <button className="btn-shop text-center a-link" >
                            {t('home9')}
                            </button>
                            </Link>
     
        </section>


        <section className="container text-center">
            <h1 className="title" style={{ color: 'black' }}>{t('home15')}</h1>
            <Row>
                <Col sm={12} md={4}>
                    <Image src={star} alt="high quality dates icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home16')}</h3>
                </Col>
                <Col sm={12} md={4}>
                    <Image src={friutdatesicon} alt="fresh dates icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home17')}</h3>
                </Col>
                <Col sm={12} md={4}>
                    <Image src={dates} alt="hand picked dates icon" className="py-2 w-25" />
                    <h3 className="mt-4">{t('home18')}</h3>
                </Col>
            </Row>
           
            <Link to={'/shopping'}>
                            <button className="btn-shop text-center a-link" >
                            {t('home9')}
                            </button>
                            </Link>
            
        </section>


        <section>
            <Container fluid>
                <Row>
                    <Col sm={12} md={8} className="align-self-center">
                        <Image src={gift} alt="fruit dates as gift" fluid />
                    </Col>
                    <Col sm={12} md={4} className="align-self-center">
                        <h3 style={{ lineHeight: 1.6 }} className="fw-bold">
                        {t('home20')}                        </h3>
                    </Col>
                </Row>
                <div className="text-center">
           
                <Link to={'/shopping'}>
                            <button className="btn-shop text-center mb-5 a-link" >
                            {t('home9')}
                            </button>
                            </Link>
                
                </div>
            </Container>
        </section>


        <section className="container text-center mb-5">
            <h1 className="title" style={{ color: 'black' }}>{t('home22')}</h1>
            <Row>
                <Col sm={12} md={3}>
                    <Image src={fiber} alt="high in fiber dates icon" className="py-2 w-50" />
                    <h4 className="mt-1">{t('home23')}</h4>
                </Col>
                <Col sm={12} md={3}>
                    <Image src={antiocidant} alt="antiocidant dates icon" className="py-2 w-50" />
                    <h4 className="mt-1">{t('home24')}</h4>
                </Col>
                <Col sm={12} md={3}>
                    <Image src={gluten} alt="gluten free dates icon" className="py-2 w-50" />
                    <h4 className="mt-1">{t('home25')}</h4>
                </Col>
                <Col sm={12} md={3}>
                    <Image src={natrual} alt="natrual dates icon" className="py-2 w-50" />
                    <h4 className="mt-1">{t('home26')}</h4>
                </Col>
            </Row>
        </section>

        <h1 className="title" style={{ color: 'black' }}>
        {t('faqTitle')}
      </h1>
      <div className=' p-5'>
      <FAQSection />
      </div>
        
      <div className="notfecation text-center" style={{marginBottom:'-20px'}}>
          <form onSubmit={letterHandler}>
        <h3 className="mb-3">{t('news1')}</h3>
        <input className="form-control w-25" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('news2')} required />
        {isLoading2 ? (
     <button type="submit" className="logbu " style={{margin:'auto'}} >
      <Spinner animation="border" role="status">
  </Spinner> 
   </button>
                            ) :(
                              <button type='submit'>{t('news3')}</button>
                            )}
     
        </form>
      </div>

       
   
      {/* <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default HomeScreen;