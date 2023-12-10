import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next';
import FAQSection from '../components/FAQSection';
import Meta from '../components/Meta';


function FaqScreen() {
    const { t , i18n } = useTranslation();


  return (
    <Container>
           {i18n.language == 'en' ? (
<Meta title={'Tamrat Dates - Frequently Asked Questions'}/>
         ) : (
<Meta title={'تمرات - الاسئلة الشائعة'}/>
         )}
        <h1 className='title'>{t('faqPage')}<br />
        <hr className='mt-2' style={{ opacity: 1, color: '#DAB155', width: '100px', margin: 'auto', height: '8px', borderWidth: '5px' }} /><br />

        </h1>
<FAQSection />
    </Container>
  )
}

export default FaqScreen