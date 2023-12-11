import { useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../slices/cartSlice';
import paymento from '../assets/paymento.png';
import transfer from '../assets/transfer.png';
import { useTranslation } from 'react-i18next';
import Meta from '../components/Meta';


const PaymentScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const { t , i18n } = useTranslation();
    const { userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
      if(!userInfo) {
        navigate('/');

      }
      if (!shippingAddress.address) {
        navigate('/shipping');
      }
    }, [navigate, shippingAddress,userInfo]);
    
    const [paymentMethod, setPaymentMethod] = useState('electronic');

    const dispatch = useDispatch();

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(savePaymentMethod(paymentMethod));
  navigate('/placeorder');
};
    

  return (
    <>
       {
      i18n.language === 'en' ? (
        
        <Meta title={'Tamrat Dates - Payment Method Information'} />
      ) : (
        <Meta title={'تمرات - معلومات وسيلة الدفع'} />
      )
    }
    
    <FormContainer>
      <CheckoutSteps step1 step2  />
      <h1>{t('payment1')}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>{t('payment2')}</Form.Label>
          <Col>
            {/* <Form.Check
              className='my-2'
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
             <Form.Check
              className='my-2'
              type='radio'
              label='Bank Transfer'
              id='bank'
              name='paymentMethod'
              value='bank'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
            <div>
      <input
        type="radio"
        value="option1"
        id="visa"
        style={{ display: 'none' }}
        checked={paymentMethod === 'electronic'}
        onChange={() => setPaymentMethod('electronic')}
        required
      />
      <input
        type="radio"
        value="option2"
        id="mastercard"
        style={{ display: 'none' }}
        checked={paymentMethod === 'bank'}
        onChange={() => setPaymentMethod('bank')}
        required
      />

      <div className="category">
        <label htmlFor="visa" className={`mb-3 visaMethod ${paymentMethod === 'electronic' ? 'mb-3' : ''}`}>
          <div className="imgName">
            <div className="imgContainer visa">
              <img src={paymento} alt="" />
            </div>
            <span className='mt-4' style={{color:'black'}}>{t('payment3')}</span>
          </div>
          <span className="check">
            
            <IoIosCheckmarkCircle  size={30}
              style={{ color: paymentMethod === 'electronic' ? '#6064b6' : 'inherit' }}
              />
          </span>
          {/* Visa method content */}
        </label>

        <label htmlFor="mastercard" className={`mastercardMethod ${paymentMethod === 'bank' ? 'mb-3' : ''}`}>
          <div className="imgName">
            <div className="imgContainer mastercard">
              <img src={transfer} alt="" />
            </div>
            <span className='mt-4' style={{color:'black'}}>{t('payment4')}</span>

            {/* <span className={`name ${paymentMethod === 'mastercard' ? 'mt-4' : ''}`}>Bank transfers</span> */}
          </div>
          <span className="check">
            {/* <i
              className="fa-solid fa-circle-check"
              style={{ color: paymentMethod === 'mastercard' ? '#6064b6' : 'inherit' }}
            ></i> */}
            <IoIosCheckmarkCircle size={30} style={{ color: paymentMethod === 'bank' ? '#6064b6' : 'inherit' }}/>
          </span>
        </label>
      </div>
    </div>
          </Col>
        </Form.Group>

        <button id="check" type='submit' className="btn btn-buy mx-1 mb-2 mt-4 w-100" >
        {t('shipping10')}
                </button>
      </Form>
    </FormContainer>
    </>
  );
};

export default PaymentScreen;
