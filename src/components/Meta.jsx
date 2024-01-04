import React from 'react';

import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'تمرات',
  description: 'نقدم تشكيلة واسعة من التمور الأصلية بجودة عالية. تصفح موقعنا الآن للاطلاع على تشكيلتنا المتنوعة من التمور',
  keywords: 'تمرات, تمر عجوة, عجوة المدينة, تمر صقعي, تمر سكري, تمر مجدول, تمر مجهول,تمور طازجة, تمور, تمر مبروم,tamrat, tmarat dates, tamratdates',
};


export default Meta;