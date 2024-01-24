import React, { useState, useEffect } from 'react';
import { useLoginUserMutation , useSendSmsApiMutation , useSendEmailApiMutation,useUpdateProfileMutation } from '../slices/usersApiSlice';
import {Spinner} from 'react-bootstrap';

import { toast } from 'react-toastify';

// import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';

import authImage from '../assets/auth.png'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { async } from 'q';


const AuthModal = ({show,handleClose}) => {


  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [resendTimeout, setResendTimeout] = useState(null);
  const { t , i18n } = useTranslation();
  const [content, setContent] = useState('sms');
  const [mode, setMode] = useState('');
  const [name, setName] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
  const [phone, setPhone] = useState('');




  const dispatch = useDispatch();
// const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [sendSms, { isLoading:loadingSms }] = useSendSmsApiMutation();
  const [sendEmail, { isLoading:lodaingEmail }] = useSendEmailApiMutation();

  const [updateProfile, { isLoading:lodaingProfile }] = useUpdateProfileMutation();



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

  // const handleResendOtp = () => {
  //   setOtp(''); // Clear previous OTP when resending
  //   // Add logic to resend OTP here
  // };

  // const resetall = () => {
  //   // Add logic to reset all form values
  // };

  const submitEmailForm = async (e) => {
    e.preventDefault();
    try {
         await sendEmail({ email }).unwrap();
    
        if(i18n.language === 'en') {
          toast.success('The otp has been sent to your email');        
        } else {
          toast.success('تم ارسال رمز الدخول الى الايميل الخاص بك');      
        }

       setMode('email')
        setContent('otp');
      } catch (err) {

        if(i18n.language === 'en') {
          toast.error('An error occurred, please try again');

        } else {
          toast.error('حصل خطأ ، الرجاء المحاولة مرة اخرى');
        }
        
      }
  };

  const submitSMSForm = async (e) => {
    e.preventDefault();
    try {
         await sendSms({ phoneNumber }).unwrap();
        

        if(i18n.language === 'en') {
          toast.success('The otp has been sent to your phone');        
        } else {
          toast.success('تم ارسال رمز الدخول الى الجوال الخاص بك');      
        }
        setMode('sms')
        setContent('otp');
      } catch (err) {
   
        if(i18n.language === 'en') {
          toast.error('An error occurred, please try again');

        } else {
          toast.error('حصل خطأ ، الرجاء المحاولة مرة اخرى');
        }
        
      }
  };



  const submitOTPForm = async (e) => {
    e.preventDefault();
    
    try {
        if (mode === 'email') {
            const res = await loginUser({ email , otp }).unwrap();
            // if(i18n.language === 'en') {
            //   toast.success('The otp has been sent to your email');        
            // } else {
            //   toast.success('تم ارسال رمز الدخول الى الايميل الخاص بك');      
            // }
            if(res.user.profile === 'inComplete') {
              setContent('userData')
            } else {
              dispatch(setCredentials({ ...res }));
              handleClose()
              window.location.reload(false);
            }
             
          
        }
        if (mode === 'sms') {
          const res = await loginUser({ phoneNumber , otp }).unwrap();


          if(res.user.profile === 'inComplete') {
            setContent('userData')
          } else {
            dispatch(setCredentials({ ...res }));
            handleClose()
            window.location.reload(false);
          }

           
        }
    
      } catch (err) {
        if(i18n.language === 'en') {
          toast.error('otp is not correct');
  
        } else {
          toast.error('رمز التحقق غير صحيح');
        }
        
      }
  };


 

  const handleChangePhone = (e) => {
    let inputValue = e.target.value;

    // Check if the input starts with '0'
    if (inputValue.startsWith('0')) {
      // Remove the leading '0'
      inputValue = inputValue.slice(1);
    }

    // Update the phoneNumber state
    setPhoneNumber(inputValue);
  };


  const handleChangePhone2 = (e) => {
    let inputValue = e.target.value;

    // Check if the input starts with '0'
    if (inputValue.startsWith('0')) {
      // Remove the leading '0'
      inputValue = inputValue.slice(1);
    }

    // Update the phoneNumber state
    setPhone(inputValue);
  };


  const submitUpdata = async (e) => {

    e.preventDefault();
    try {

      if(mode ==='sms') {
       const res = await updateProfile({ mode,email:emailaddress,phone:phoneNumber,name }).unwrap();
       dispatch(setCredentials({ ...res }));
       handleClose()
       window.location.reload(false);
      }

      if(mode ==='email') {
        const res =   await updateProfile({ mode,email,phone:phone,name }).unwrap();
        dispatch(setCredentials({ ...res }));
        handleClose()
        window.location.reload(false);
      }
        
        

        if(i18n.language === 'en') {
          toast.success('The otp has been sent to your phone');        
        } else {
          toast.success('تم ارسال رمز الدخول الى الجوال الخاص بك');      
        }
        setMode('sms')
        setContent('otp');
      } catch (err) {
   
        if(i18n.language === 'en') {
          toast.error('An error occurred, please try again');

        } else {
          toast.error('حصل خطأ ، الرجاء المحاولة مرة اخرى');
        }
        
      }

  }




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
                  

                    {content === 'sms' && (
     <form onSubmit={submitSMSForm}>
 <h5 className="py-3 text-center">{t('login')}</h5>
     <div className="mb-3">
     <div className="input-group" dir='ltr'>
<span className="input-group-text" style={{ borderTopLeftRadius: '0',borderBottomLeftRadius: '0'}}>+966</span>
<input type="text" required name="phoneNumber" className="form-control" placeholder={t('enterPhone')}  value={phoneNumber} onChange={handleChangePhone}  style={{ borderTopRightRadius: '0',borderBottomRightRadius: '0',}} />
</div>                          </div>
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
     <Link to="#"  className="back-link mt-3" onClick={() => setContent('email')} >{t('auth3')} </Link>
     </div>
   </form>
                    )}

                    {content === 'email' && (
                                            <form onSubmit={submitEmailForm}>
                                              <h5 className="py-3 text-center">{t('login')}</h5>
                                            <div className="mb-3">
                                              <input type="email" required name="email" className="form-control" placeholder={t('enterEmail')} value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                        
                                        <Link to="#"  className="back-link mt-3" onClick={() => setContent('sms')} >{t('auth2')} </Link>
                  
                                            </div>
                                          </form> 
                                          )}


                        {content === 'otp' && (

<form onSubmit={submitOTPForm}>
<h5 className="py-3 text-center">{t('checkOtp')}</h5>
<div className="mb-3">
  <input type="text" name="otp" required className="form-control" placeholder={t('enterOtp')} value={otp} onChange={(e) => setOtp(e.target.value)} />
</div>
<div className='text-center'>
{isLoading ? (
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


                          {content === 'userData' && (
                                                  
                                                  
                            <>
                            {mode === 'sms' && (
                                  <form onSubmit={submitUpdata}>
                                    <h5 className="py-3 text-center">{t('login')}</h5>
                                     <div className="mb-3">
                                    <input type="text" name="name" required className="form-control" placeholder={t('enterName')} value={name} onChange={(e) => setName(e.target.value)} />
                                  </div>
                                  <div className="mb-3">
                                    <input type="email" name="email" required className="form-control" placeholder={t('enterEmail')} value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                  </div>
                                 
                                  <div className='text-center'>
                                    {lodaingProfile ? (
             <button type="submit" className="logbu " style={{margin:'auto'}} >
              <Spinner animation="border" role="status">
          </Spinner> 
           </button>
                                    ) :(
                                      <button type="submit" className="logbu " style={{margin:'auto'}} >
                                      {t('continue')} 
                                    </button>
                                    )}
                              
        
                                  </div>
                                </form> 

                            )}

                              {mode === 'email' && (
                                     <form onSubmit={submitUpdata}>
                                       <h5 className="py-3 text-center">{t('login')}</h5>
                                     <div className="mb-3">
                                    <input type="text" name="name" required className="form-control" placeholder={t('enterName')} value={name} onChange={(e) => setName(e.target.value)} />
                                  </div>
                                 
                                <div className="mb-3">
                                <div className="input-group" dir='ltr'>
                            <span className="input-group-text" style={{ borderTopLeftRadius: '0',borderBottomLeftRadius: '0'}}>+966</span>
                            <input type="text" name="phoneNumber" required className="form-control" placeholder={t('enterPhone')}  value={phone} onChange={handleChangePhone2}  style={{ borderTopRightRadius: '0',borderBottomRightRadius: '0',}} />
                            </div>                          </div>
                                 
                                  <div className='text-center'>
                                    {lodaingProfile? (
             <button type="submit" className="logbu " style={{margin:'auto'}} >
              <Spinner animation="border" role="status">
          </Spinner> 
           </button>
                                    ) :(
                                      <button type="submit" className="logbu " style={{margin:'auto'}} >
                                      {t('continue')} 
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
