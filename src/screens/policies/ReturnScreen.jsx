import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';

const ReturnPolicy = () => {
    const { t , i18n } = useTranslation();

  return (
      <>
      {i18n.language == 'en' ? (
        <>
                <Meta title={'Tamrat Dates - Return Policy'}/>

                   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>Return Policy</span>
 </div>
        <Container className="ltr">
        <Row className="p-5">
          <Col>
            <h2>Return Policy</h2>
            <p>
            We regret to inform you that we don’t accept any returns or exchange to our products, as they are food related items
            </p>
  

            <p>
            If you have received an order and you unpleased with what you have received we urge you to contact our customer service number 07904358090 and explain in details with pictures about your complaints.
            </p>
           
            </Col>
            </Row>
  </Container>
  </>
      ) : (
        <>
          <Meta title={'تمرات - سياسة الارجاع'}/>
                   <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>سياسة الارجاع</span>
    </div>
        <Container>
        <Row className="p-5">
          <Col>
            <h2>سياسة الارجاع</h2>
            <p>
            نأسف لإبلاغك بأننا لا نقبل أي مرتجعات أو استبدال لمنتجاتنا ، لأنها سلع متعلقة بالطعام
            </p>
  
  
            <p>
            إذا كنت قد تلقيت طلبًا ولم تكن راضيًا عما تلقيته ، فنحن نحثك على الاتصال برقم خدمة العملاء لدينا 07904358090 والشرح بالتفصيل بالصور حول شكواك.            </p>
           
            </Col>
            </Row>
            </Container>
            </>
      )}
</>
)}


export default ReturnPolicy;