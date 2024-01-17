import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../slices/cartSlice';

import { useTranslation } from 'react-i18next';
import { useGetCountriesQuery } from '../slices/productsApiSlice';
import { useEffect } from 'react';
import Meta from '../components/Meta';
import Loader from '../components/Loader';




const ShippingScreen = () => {
  const { t , i18n } = useTranslation();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = useSelector((state) => state.auth);

  const [address, setAddress] = useState(shippingAddress.address || '');
  const [city, setCity] = useState(shippingAddress.city || '');
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ''
  );
  const [country, setCountry] = useState(shippingAddress.country || '');

  const {
    data: countries,
    isLoading,
    error,
  } = useGetCountriesQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate('/payment');
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    
    setCity(''); // Clear the city when the country changes
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  if(isLoading) {
    return (
      <Loader />
    )
    }

  return (
    <>
    {
      i18n.language === 'en' ? (
        
        <Meta title={'Tamrat Dates - Shipping Information'} />
      ) : (
        <Meta title={'تمرات - معلومات الشحن'} />
      )
    }
    <FormContainer>
     
      <CheckoutSteps step1  />
      <h1>{t('shipping1')}</h1>
      <Form onSubmit={submitHandler}>
       
        <Form.Group className='my-2' controlId='country'>
          <Form.Label>{t('shipping8')}</Form.Label>
          <Form.Control
            as='select'
            placeholder={t('shipping9')}
            value={country}
            required
            onChange={handleCountryChange}
          >
             <option value=''>{t('shipping9')}</option>
             {isLoading ? (
        <div>...</div>
      ) : error ? (
        <div>{error?.data.message || error.error}</div>
      ) : (
            countries.map((country) => (
               
              <option key={country.id} value={i18n.language === 'ar' ? country.country_ar : country.country_en}>
              {i18n.language === 'ar' ? country.country_ar : country.country_en}
            </option>          
                ))
                )}
          </Form.Control>
        </Form.Group>


      

        {
  country === 'Saudi Arabia' || country === 'المملكة العربية السعودية' ? (
    <Form.Group className='my-2' controlId='city'>
    <Form.Label>{t('shipping4')}</Form.Label>
    <Form.Control
      as='select'
      value={city}
      onChange={(e) => setCity(e.target.value)}
      required
    >
      <option value=''>{t('shipping15')}</option>
      {
              isLoading ? (
                <div>...</div>
              ) : error ? (
                <div>{error?.data.message || error.error}</div>
              ) : (
      countries.find((c) => c.id === 1)?.cities.map((city) => (
        <option key={city.id} value= {city.city_en}>
          {i18n.language === 'ar' ? city.city_ar : city.city_en}
        </option>
     )))}
    </Form.Control>
  </Form.Group>
  ) : (
    <Form.Group className='my-2' controlId='city'>
    <Form.Label>{t('shipping4')}</Form.Label>
    <Form.Control
      type='text'
      placeholder={t('shipping5')}
      value={city}
      required
      onChange={(e) => setCity(e.target.value)}
    ></Form.Control>
  </Form.Group>
  )
}

<Form.Group className='my-2' controlId='address'>
          <Form.Label>{t('shipping2')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipping3')}
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='postalCode'>
          <Form.Label>{t('shipping6')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipping7')}
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

   

       
        <button id="check" type='submit' className="btn btn-buy mx-1 mb-2 w-100" >
        {t('shipping10')}
                </button>
      </Form>
    </FormContainer>
    </>
  );
};

export default ShippingScreen;