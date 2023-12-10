import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';

const PrivacyPolicy = () => {
    const { t , i18n } = useTranslation();

  return (
      <>
      {i18n.language == 'en' ? (
        <>
        <Meta title={'Tamrat Dates - Privacy Policy'}/>

           <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   <span style={{color:'#7C9D64'}}>Privacy Policy</span>
 </div>
        <Container className="ltr">
        <Row className="p-5">
          <Col>
            <h2>Privacy Policy</h2>
            <p>
              We believe that your privacy is very important and we take it seriously. This Privacy Policy describes TAMRAT’s policies and procedures of how we collect, use, and disclose your information when you use our website. By using and purchasing from our website, you consent to our use of your information in accordance with this policy.
            </p>
  
            <h2>What personal data we collect and why we collect it</h2>
            <p>
              When you visit our website, we collect some personal information to provide and continually improve our products and service.<br/>Here are the types of information we collect:
            </p>
            <p>
              Information You Give Us: Information when you make a purchase or attempt to make a purchase such as your name, billing address, shipping address, payment information (including credit card numbers and Paypal details, email address, and phone number). In addition, we collect your information when you submit your “contact us” form.
            </p>
            <p>Automatic Information:</p>
            <ul>
              <li>
                “Cookies”: Like many websites, we use Cookies and other unique identifiers and we obtain certain types of information when your web browser or device accesses Tamrat website. For more information about cookies, and how to disable cookies, visit{' '}
                <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                  website
                </a>
              </li>
              <li>“Log files”: Track actions occurring on the site, and gather data including your Internet protocol (IP) address, browser type, Internet service provider, referring pages, and date/time stamps.</li>
              <li>“Web beacons,” “tags” and pixels”: Information about how you use the website.</li>
              <li>Phone calls used to call our customer service number</li>
            </ul>
  
            <h2>How Do we Use Your Personal Information</h2>
            <p>
              We Use the information you give us generally to fulfill orders placed through the site (including processing your payment information, arranging for delivery and providing you with invoices and/or order confirmation). In addition, we use order information to communicate with you (e.g. to remind you of an abandoned basket; provide you with information or advertising relating to our products or services).
            </p>
            <p>
              We use automatic information that we gather to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our site (for example, by generating analytics about how our customers browse and interact with the website, and to assess the success of our marketing and advertising campaigns).
            </p>
            <p>
              If you have given us the permission to use your data in these ways, we may send you emails about our brand, new products and other updates. You can update your preferences, or unsubscribe from emails at any time by emailing us on support@tamratdates.com
            </p>
            <p>We do not sell your personal details to anyone.</p>
  
            <h2>How Long Do We Keep Your Personal Information?</h2>
            <p>Once an order is placed, we will maintain your order information for our records until you ask us to delete this information.</p>
  
            <h2>Does TAMRAT share your Personal Information?</h2>
            <p>
              We may share your personal data with third parties set out below for the purposes set out in this privacy policy. We may share your personal information with the following specific third party companies:
            </p>
            <ul>
              <li>
                Google Analytics: We use Google Analytic to help us understand how our customers use our website. You can learn more how Google use your information{' '}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  here
                </a>
                . You can also withdraw from Google Analytics by clicking{' '}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  here
                </a>
              </li>
              <li>Payment Service provider – payment processors may take your personal information directly from you as part of processing a purchase, and there will be data controller in their own right for that processing;</li>
              <li>Professional advisers like bankers, lawyers, accountants and insurers; and</li>
              <li>Government, regulators and law enforcement.</li>
            </ul>
  
            <h2>Payment data</h2>
            <p>
              We do not process any sensitive card payment details ourselves, but utilize secure payment providers to do so for us. Any payment data you input is encrypted in your browser by the payment provider in a way that only they can access, whereas we receive only non-sensitive data (payment token) and references confirming that you have made a payment. We do not store further payment related information in our system.
            </p>
  
            <h2>How secure is this website?</h2>
            <p>
              We have taken into account appropriate safety measures to ensure and prevent your personal data from being accidentally lost, used or accessed in unauthorized way, altered or disclosed. Moreover, we limit access to your personal information to few employees and third parties who have business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            </Col>
            </Row>
  </Container>
  </>
      ) : (
        <>
                <Meta title={'تمرات - سياسة الخصوصية'}/>

              <div className='d-flex text-center align-items-center p-5 pb-0 gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      <span style={{color:'#7C9D64'}}>سياسة الخصوصية</span>
    </div>
        <Container>
        <Row className="p-5">
          <Col>
            <h2>سياسة الخصوصية</h2>
            <p>
              نعتقد أن خصوصيتك مهمة جدًا ونأخذها على محمل الجد. تصف سياسة الخصوصية هذه سياسات وإجراءات تمرات المتعلقة بكيفية جمعنا لمعلوماتك واستخدامها والكشف عنها عند استخدامك لموقعنا الإلكتروني. باستخدامك وشرائك من موقعنا ، فإنك توافق على استخدامنا لمعلوماتك وفقًا لهذه السياسة.
            </p>
  
            <h2>ما هي البيانات الشخصية التي نجمعها ولماذا نقوم بجمعها</h2>
            <p>
              عندما تزور موقعنا على الويب ، نجمع بعض المعلومات الشخصية من أجل توفير منتجاتنا وخدماتنا وتحسينها باستمرار. فيما يلي أنواع المعلومات التي نجمعها:
            </p>
            <p>
              المعلومات التي تقدمها لنا: معلومات عند إجراء عملية شراء أو محاولة إجراء عملية شراء مثل اسمك وعنوان إرسال الفواتير وعنوان الشحن ومعلومات الدفع (بما في ذلك أرقام بطاقات الائتمان وتفاصيل Paypal وعنوان البريد الإلكتروني ورقم الهاتف). بالإضافة إلى ذلك ، نقوم بجمع معلوماتك عندما ترسل نموذج "اتصل بنا" الخاص بك.
            </p>
            <p>المعلومات التلقائية:</p>
            <ul>
              <li>
                "ملفات تعريف الارتباط": مثل العديد من مواقع الويب ، نستخدم ملفات تعريف الارتباط والمعرفات الفريدة الأخرى ونحصل على أنواع معينة من المعلومات عندما يصل متصفح الويب أو الجهاز الخاص بك إلى موقع تمرات لمزيد من المعلومات حول ملفات تعريف الارتباط وكيفية تعطيل ملفات تعريف الارتباط ، تفضل بزيارة{' '}
                <a href="http://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                  الموقع
                </a>
                .
              </li>
              <li>"ملفات السجل": تتبع الإجراءات التي تحدث على الموقع ، وجمع البيانات بما في ذلك عنوان بروتوكول الإنترنت (IP) ، ونوع المتصفح ، ومزود خدمة الإنترنت ، وصفحات الإحالة ، وختم التاريخ / الوقت.</li>
              <li>"إشارات الويب" و "العلامات" و "وحدات البكسل": معلومات حول كيفية استخدامك لموقع الويب.</li>
              <li>المكالمات الهاتفية المستخدمة للاتصال برقم خدمة العملاء لدينا</li>
            </ul>
  
            <h2>كيف نستخدم المعلومات الشخصية الخاصة بك</h2>
            <p>
              نحن نستخدم المعلومات التي تقدمها لنا بشكل عام لتلبية الطلبات المقدمة من خلال الموقع (بما في ذلك معالجة معلومات الدفع الخاصة بك ، وترتيب التسليم وتزويدك بالفواتير و / أو تأكيد الطلب). بالإضافة إلى ذلك ، نستخدم معلومات الطلب للتواصل معك (على سبيل المثال لتذكيرك بسلة مهجورة ؛ أو تزويدك بالمعلومات أو الإعلانات المتعلقة بمنتجاتنا أو خدماتنا).
            </p>
            </Col>
            </Row>
            </Container>
            </>
      )}
</>
)}


export default PrivacyPolicy;