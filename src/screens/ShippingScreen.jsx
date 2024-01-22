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

  const [country, setCountry] = useState(shippingAddress.country || '');

    const handleLogic = () => {
      const isShippingAddressNotEmpty = Object.keys(shippingAddress).length > 0;

      if(isShippingAddressNotEmpty && shippingAddress.type === 'default') {
        console.log('1')
        return true

      } else if(isShippingAddressNotEmpty && shippingAddress.type !== 'default') {
        console.log('2')
        console.log(shippingAddress)
return false
      } else  {
        console.log('3')
        return true
      }
    }
  const [sendAsGif, setSendAsGif] = useState(shippingAddress.type === 'gift' ? true : false || false);
  const [receiveBySomeoneElse, setReceiveBySomeoneElse] = useState(shippingAddress.type === 'someone' ? true : false || false);
  const [receive, setReceive] = useState(handleLogic);


  const [someoneName, setSomeoneName] = useState(shippingAddress.name || '');
  const [someonePhone, setSomeonePhone] = useState(shippingAddress.phone || '');

  const [giftName, setGiftName] = useState(shippingAddress.name || '');
  const [giftPhone, setGiftPhone] = useState(shippingAddress.phone || '');
  const [giftMessage, setGiftMessage] = useState(shippingAddress.message || '');


  const {
    data: countries,
    isLoading,
    error,
  } = useGetCountriesQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if(receive) {
    
      dispatch(saveShippingAddress({ address, city, country , type:'default' }));
      console.log('rec')

    }else if (receiveBySomeoneElse) {
      
      dispatch(saveShippingAddress({ address, city, country , type:'someone',name:someoneName,phone:someonePhone }));
      console.log('else')
    } else if(sendAsGif) {
      dispatch(saveShippingAddress({ address, city, country , type:'gift',name:giftName,phone:giftPhone,message:giftMessage }));
      console.log('gift')

    } else {
      dispatch(saveShippingAddress({ address, city, country , type:'default' }));

    }



    navigate('/payment');
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    
    setCity(''); // Clear the city when the country changes
  };

  const handleSendAsGifChange = () => {
    if(sendAsGif && (!receiveBySomeoneElse || !receive)) {
      return
    }
    setSendAsGif(!sendAsGif);
    if (receiveBySomeoneElse || receive) {
      setReceiveBySomeoneElse(false);
      setReceive(false)
    }
  };

  const handleReceiveBySomeoneElseChange = () => {
    if(receiveBySomeoneElse && (!setSendAsGif || !receive)) {
      return
    }
    setReceiveBySomeoneElse(!receiveBySomeoneElse);
    if (setSendAsGif || receive) {
      setSendAsGif(false);
      setReceive(false)
    }
  };

  const handleReceiveChange = () => {
    if(receive && (!sendAsGif || !receiveBySomeoneElse)) {
      return
    }
    setReceive(!receive);
    if (sendAsGif || receiveBySomeoneElse) {
      setSendAsGif(false);
      setReceiveBySomeoneElse(false);
    }
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

        <Form.Group className='my-2' controlId='receive'>
        <Form.Check
          type='checkbox'
          label={t('shipform1')}
          checked={receive}
          onChange={handleReceiveChange}
        />

   </Form.Group>


        <Form.Group className='my-2' controlId='receiveBySomeoneElse'>
        <Form.Check
          type='checkbox'
          label={t('shipform2')}
          checked={receiveBySomeoneElse}
          onChange={handleReceiveBySomeoneElseChange}
        />

   </Form.Group>

   {receiveBySomeoneElse && (
     <>
     <Form.Group className='my-2' controlId='someoneName1'>
          <Form.Label>{t('shipform4')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipform5')}
            value={someoneName}
            required
            onChange={(e) => setSomeoneName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='someoneName2'>
          <Form.Label>{t('shipform6')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipform7')}
            value={someonePhone}
            required
            onChange={(e) => setSomeonePhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
     </>
   )}


   <Form.Group className='my-2' controlId='sendAsGigt'>
        <Form.Check
          type='checkbox'
          label={t('shipform3')}
          checked={sendAsGif}
          onChange={handleSendAsGifChange}
        />

   </Form.Group>

   {sendAsGif && (
     <>
        <Form.Group className='my-2' controlId='giftdata1'>
          <Form.Label>{t('shipform4')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipform5')}
            value={giftName}
            required
            onChange={(e) => setGiftName(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group className='my-2' controlId='giftdata2'>
          <Form.Label>{t('shipform6')}</Form.Label>
          <Form.Control
            type='text'
            placeholder={t('shipform7')}
            value={giftPhone}
            required
            onChange={(e) => setGiftPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='giftdata3'>
          <Form.Label>{t('shipform8')}</Form.Label>
          <Form.Control
            as='textarea'
            placeholder={t('shipform9')}
            value={giftMessage}
            
            onChange={(e) => setGiftMessage(e.target.value)}
          ></Form.Control>
        </Form.Group>
     </>
   )}

       
        <button id="check" type='submit' className="btn btn-buy mx-1 mb-2 w-100" >
        {t('shipping10')}
                </button>
      </Form>
    </FormContainer>
    </>
  );
};

export default ShippingScreen;