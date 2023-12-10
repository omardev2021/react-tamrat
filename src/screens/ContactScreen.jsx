import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {  useContactMutation} from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import Meta from '../components/Meta';

const ContactScreen = () => {
  const { t, i18n } = useTranslation();
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState('')
  const [content , setContent] = useState('')

  const [contact, { isLoading }] = useContactMutation();

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      
      const res = await contact({
        email,
        phone,
        name,
        content
      }).unwrap();
console.log(res)
    
toast.success(res);   

    } catch (err) {
      toast.error('You have already subscribed to our newsletter');
     
      
    }
  }

  return (
    <>
     {i18n.language == 'en' ? (
<Meta title={'Tamrat Dates - Contact us'}/>
         ) : (
<Meta title={'تمرات - تواصل معنا'}/>
         )}
      <div className="contact-page">
        <div className="contact">
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.description')}</p>
        </div>
      </div>
      <div className="address text-center">
        <div className="container">
          <div className="address-item">
            <div className="row">
              <div className="col-sm-4 mb-2">
                <i className="fas fa-map-marker-alt icon"></i>
                <h6>{t('contact.location')}</h6>
                <span>{t('contact.locationDetails')}</span>
              </div>
              <div className="col-sm-4 mb-2">
                <i className="fas fa-phone icon"></i>
                <h6>{t('contact.phoneNumber')}</h6>
                <span>012929389</span>
              </div>
              <div className="col-sm-4">
                <i className="far fa-envelope-open icon"></i>
                <h6>{t('contact.email')}</h6>
                <span>info@tamaratdates.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="container my-5 text-center">
          <h2 className="mb-4">{t('contact.beInTouch')}</h2>
          <hr style={{ opacity: 1, color: '#7C9D64', width: '90px', margin: 'auto', height: '8px', borderWidth: '8px' }} />
          <br />
          <div className="contact-form container">
            <form onSubmit={handleContact} className="form">
              <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder={t('contact.name')} required />
              <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder={t('contact.emailPlaceholder')} required />
              <input type="tel" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder={t('contact.phoneNumberPlaceholder')} required />
              <textarea className="form-control" onChange={(e)=>setContent(e.target.value)} name="msg" value={content} rows="4" cols="20" placeholder={t('contact.message')} required></textarea>
              <input type="submit" value={t('contact.send')} className="btn btn-send"  />
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactScreen;