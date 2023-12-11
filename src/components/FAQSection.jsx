import Accordion from 'react-bootstrap/Accordion';

import React from 'react';

import { useTranslation } from 'react-i18next';

const FAQSection = () => {
  const { t } = useTranslation();

  return (
    <div className="accordion row ">
 
      <div className="col-sm-12">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{t('faqQuestion1')}</Accordion.Header>
        <Accordion.Body>
        {t('faqAnswer1')}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{t('faqQuestion2')}</Accordion.Header>
        <Accordion.Body>
        {t('faqAnswer2')}
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>{t('faqQuestion3')}</Accordion.Header>
        <Accordion.Body>
        {t('faqAnswer3')}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;