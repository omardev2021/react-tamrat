import { Col, Container, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import linkdinImage from '../assets/linkedin.png';
import insta from '../assets/instagram-icon.png';
import payment from '../assets/accepted-payment-methods-left.png';
import paymentAr from '../assets/accepted-payment-methods-right.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer style={{ background: '#7c9d64' }} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Container>
        <Row className="container text-center py-5" style={{ color: '#ffffff' }}>
          <Col sm={3} className="mb-3">
            <p style={{ fontSize: '26px' }}>{t('Tamrat Dates')}</p>
          
            <Link to={'/shopping'}>{t('Our Products')}</Link>
            <Link to={''}>{t('From Farm to Table')}</Link>
            <Link to={''}>{t('Benefits of Dates')}</Link>
            <Link to={''}>{t('History of Dates')}</Link>
          </Col>
          <Col sm={3} className="mb-3">
            <p style={{ fontSize: '26px' }}>{t('About The Company')}</p>
            <Link to={'/contact-us'}>{t('Contact Us')}</Link>
            <Link to={'/frequently-asked-questions'}>{t('Frequently Asked Questions')}</Link>
            <Link to={'/'}>{t('Hiring')}</Link>
          </Col>
          <Col sm={3} className="mb-3">
            <p style={{ fontSize: '26px' }}>{t('Our Products')}</p>
            <Link to={'/ajwa-date'}>{t('Ajwa Date')}</Link>
            <Link to={'/sukari-date'}>{t('Sukari Date')}</Link>
            <Link to={'/sagie-date'}>{t('Sagie Date')}</Link>
            <Link to={'/majhool-date'}>{t('Majhool Date')}</Link>
            <Link to={'/mabroom-date'}>{t('Mabroom Date')}</Link>
          </Col>
          <Col sm={3} className="mb-3">
            <div className="media text-center" style={{ display: 'inline-flex' }}>
              <a href="https://www.instagram.com/tamratdates/?hl=en" target="_blank">
                <Image src={insta} alt="instagram-icon" width={32} height={32} />
              </a>
              <a href="https://sa.linkedin.com/company/tamrat-dates" target="_blank">
                <Image src={linkdinImage} alt="linkedin-icon" width={32} height={32} />
              </a>
            </div>
            <div className="paymetMethod text-center">
              {i18n.language == 'en' ? (
              <Image src={payment} alt="accepted-payment-methods" style={{ maxWidth: '400px' }} />

              ) : (
                <Image src={paymentAr} alt="accepted-payment-methods" style={{ maxWidth: '400px' }} />

              )}
            </div>
            <div className="container text-center" style={{ color: 'white' }}>
              <p>{t('Commercial Register No. 4030299562')}</p>
            </div>
          </Col>
        </Row>

        <Row className="text-center" style={{ marginTop: '-30px', paddingBottom: '20px' }}>
          <Col sm={12} style={{ textAlign: 'center' }}>
            <div className="text-center" style={{ display: 'inline-flex' }}>
              <Link to={'/privacy-policy'}>{t('Privacy Policy')}</Link>
              <Link to={'/return-policy'}>{t('Return Policy')}</Link>
              <a href="/sitemap.xml">{t('Sitemap')}</a>
            </div>
            <p>{t('© 2023 Tamrat Dates All Rights Reserved')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
