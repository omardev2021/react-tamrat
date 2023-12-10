import React, { useState, useEffect } from 'react';
import { useLoginUserMutation , useSendSmsApiMutation , useSendEmailApiMutation,useRegisterMutation } from '../slices/usersApiSlice';
import {Spinner} from 'react-bootstrap';

import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import emailImage from '../assets/phone-tam.png'
import phoneImage from '../assets/email-tam.png'
import authImage from '../assets/auth.png'
import { useTranslation } from 'react-i18next';


const AuthModal = ({show,handleClose}) => {
//   const [showModal, setShowModal] = useState(false);
  const [req, setReq] = useState(false);
  const [iden, setIden] = useState('exist');

  const [mode, setMode] = useState('');
  const [showInputForm, setShowInputForm] = useState(null);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email2, setEmail2] = useState('');
  const [phoneNumber2, setPhoneNumber2] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [resendTimeout, setResendTimeout] = useState(null);
  const { t , i18n } = useTranslation();

  const dispatch = useDispatch();
const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [sendSms, { isLoading:loadingSms }] = useSendSmsApiMutation();
  const [sendEmail, { isLoading:lodaingEmail }] = useSendEmailApiMutation();
  const [register, { isLoading:loadingRegister }] = useRegisterMutation();




  useEffect(() => {
    if (resendTimeout === null && otp.includes('Resend')) {
      const timeoutId = setTimeout(() => {
        setOtp(''); // Clear previous OTP when resending
        // Add logic to resend OTP here
      }, 30000);

      setResendTimeout(timeoutId);
    }
    
    return () => {
      if (resendTimeout !== null) {
        clearTimeout(resendTimeout);
        setResendTimeout(null);
      }
    };
  }, [resendTimeout, otp]);

  const handleResendOtp = () => {
    setOtp(''); // Clear previous OTP when resending
    // Add logic to resend OTP here
  };

  const resetall = () => {
    // Add logic to reset all form values
  };

  const submitEmailForm = async (e) => {
    e.preventDefault();
    try {
        const res = await sendEmail({ email }).unwrap();
        console.log(res);
        toast.success('otp sent');    
        setReq(true);
        setMode('email');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        
      }
  };

  const submitSMSForm = async (e) => {
    e.preventDefault();
    try {
        const res = await sendSms({ phoneNumber }).unwrap();
        console.log(res);
        toast.success('otp sent');
        setReq(true);
        setMode('phone');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        
      }
  };

  const registerHandle = async(e) => {
    e.preventDefault();
    // Add logic to submit registration form
  
    try {
      const res = await register({ 
        name:name,
        email:email2,
        phone:phoneNumber2
       }).unwrap();
      console.log(res);
      toast.success('otp sent to your phone');
      setReq(true);
      setMode('phone');
      setIden('new')
      // setReq(true);
      // setMode('phone');
    } catch (err) {
      toast.error('please check your information');
      
    }
  };

  const submitOTPForm = async (e) => {
    e.preventDefault();
    
    try {
        if (mode === 'email') {
            const res = await loginUser({ email , otp }).unwrap();
            console.log(res);
            toast.success('done');    
            dispatch(setCredentials({ ...res }));
            handleClose()
            window.location.reload(false);
        }
        if (mode === 'phone') {
            const res = await loginUser({ phoneNumber , otp }).unwrap();
            console.log(res);
            toast.success('done');
            dispatch(setCredentials({ ...res }));
            // navigate(redirect);    
            handleClose()
            window.location.reload(false);
        }
    
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        
      }
  };


  const submitOTPFormNew = async (e) => {
    e.preventDefault();
    
    try {
     
      
            const res = await loginUser({ phoneNumber:phoneNumber2 , otp }).unwrap();
            console.log(res);
            toast.success('done');
            dispatch(setCredentials({ ...res }));
            // navigate(redirect);    
            handleClose()
            window.location.reload(false);
       
    
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        
      }
  };

  return (
      <>
      {show && (
            <div className=" overlay-alp ">
            <div className="popup2  ">
              <div className="contentBox2">
                
              <span className="closem" onClick={handleClose}>
              &times;
            </span>
                <div style={{ margin: 'auto' }}>
                  <div className="user text-center mt-4">
                    <img src={authImage} width="50" alt="Logo" />
                  </div>
      
                  {!showInputForm ? (
                    <>
                      <h5 className="py-3 text-center">{t('auth1')}</h5>
                      <a href="#" className="text-decoration-none" onClick={() => setShowInputForm('sms')}>
                        <div className="sms p-3 mb-4">
                          <div className="d-flex justify-content-between">
                            <img src={phoneImage} width="50" alt="Telephone" />
                            <span style={{ color: 'black' }}>{t('auth2')}</span>
                            <i className="bi bi-caret-right-fill" style={{ color: 'black' }}></i>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="text-decoration-none" onClick={() => setShowInputForm('email')}>
                        <div className="sms p-3">
                          <div className="d-flex justify-content-between " style={{ gap: '40px' }}>
                            <img src={emailImage} width="50" alt="Email" />
                            <span style={{ color: 'black' }}>{t('auth3')}</span>
                            <i className="bi bi-caret-right-fill" style={{ color: 'black' }}></i>
                          </div>
                        </div>
                      </a>
                    </>
                  ) : !req ? (
                    <>
                      {showInputForm === 'email' ? (
                        <form onSubmit={submitEmailForm}>
                          <h5 className="py-3 text-center">{t('login')}</h5>
                          <div className="mb-3">
                            <input type="email" name="email" className="form-control" placeholder={t('enterEmail')} value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className='text-center'>
                            {lodaingEmail ? (
     <button type="submit" className="logbu " style={{margin:'auto'}} >
      <Spinner animation="border" role="status">
  </Spinner> 
   </button>
                            ) :(
                              <button type="submit" className="logbu " style={{margin:'auto'}} >
                              {t('continue')} 
                            </button>
                            )}
                      
                          <a href="#" className="back-link" onClick={() => setShowInputForm('regis')} >{t('new')} </a>
                          <a href="#" className="back-link" onClick={() => setShowInputForm(null)} >{t('back')} </a>

                          </div>
                        </form>
                      ) : showInputForm === 'sms' ? (
                        <form onSubmit={submitSMSForm}>
                          <h5 className="py-3 text-center">{t('login')} </h5>
                          <div className="mb-3">
                            <input type="text" name="phoneNumber" className="form-control" placeholder={t('enterPhone')}  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                          </div>
                          <div className='text-center'>
                    
                          {loadingSms ? (
     <button type="submit" className="logbu " style={{margin:'auto'}} >
      <Spinner animation="border" role="status">
  </Spinner> 
   </button>
                            ) :(
                              <button type="submit" className="logbu " style={{margin:'auto'}} >
                                 {t('continue')} 
                            </button>
                            )}
                          <a href="#" className="back-link" onClick={() => setShowInputForm('regis')} >{t('new')} </a>
                          <a href="#" className="back-link" onClick={() => setShowInputForm(null)} >{t('back')} </a>
                          </div>
                        </form>
                      ) : showInputForm === 'regis' ? (
                        <form onSubmit={registerHandle}>
                          <h5 className="py-3 text-center">{t('register')}</h5>
                          <div className="mb-3">
                            <input type="text" name="name" className="form-control" placeholder={t('registeration1')} value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="email" name="email" className="form-control" placeholder={t('registeration2')} value={email2} onChange={(e) => setEmail2(e.target.value)} />
                            <input type="text" name="phoneNumber" className="form-control" placeholder={t('registeration3')} value={phoneNumber2} onChange={(e) => setPhoneNumber2(e.target.value)} />
                          </div>
                          <div className='text-center'>
                            {loadingRegister ? (
                                     <button type="submit" className="logbu " style={{margin:'auto'}} >
                                     <Spinner animation="border" role="status">
                                 </Spinner> 
                                  </button>
                             
                            ) : (
                              <button type="submit" className="logbu" >
                              {t('registeration4')}
                            </button>
                            )}
                         
                          <a href="#" className="back-link" onClick={() => setShowInputForm(null)} >{t('registeration5')}</a>
                          </div>
                        </form>
                      ) : null}
                    </>
                  ) : (
                    
                 <>
                 {iden == 'new' ? (
                        <form onSubmit={submitOTPFormNew}>
                        <h5 className="py-3 text-center">{t('checkOtp')}</h5>
                        <p>{t('checkOtpNew')} {phoneNumber2}</p>
                        <div className="mb-3">
                          <input type="text" name="otp" className="form-control" placeholder={t('enterOtp')} value={otp} onChange={(e) => setOtp(e.target.value)} />
                        </div>
                        <div className='text-center'>
                        {lodaingEmail ? (
       <button type="submit" className="logbu " style={{margin:'auto'}} >
        <Spinner animation="border" role="status">
    </Spinner> 
     </button>
                              ) :(
                                <button type="submit" className="logbu " style={{margin:'auto'}} >
                                {t('check')}
                              </button>
                              )}
                        </div>
                      </form>
                 ) : (
                  <form onSubmit={submitOTPForm}>
                  <h5 className="py-3 text-center">{t('checkOtp')}</h5>
                  <div className="mb-3">
                    <input type="text" name="otp" className="form-control" placeholder={t('enterOtp')} value={otp} onChange={(e) => setOtp(e.target.value)} />
                  </div>
                  <div className='text-center'>
                  {lodaingEmail ? (
 <button type="submit" className="logbu " style={{margin:'auto'}} >
  <Spinner animation="border" role="status">
</Spinner> 
</button>
                        ) :(
                          <button type="submit" className="logbu " style={{margin:'auto'}} >
                          {t('check')}
                        </button>
                        )}
                  </div>
                </form>
                 )}
               
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          )}
    </>
  );
};

export default AuthModal;
