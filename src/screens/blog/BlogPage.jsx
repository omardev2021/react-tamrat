// BlogPage.jsx
import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { FaAlignJustify, FaAngleLeft } from 'react-icons/fa';
import string from '../../assets/string-of-fruit-dates.webp'
import {  useNewsletterMutation} from '../../slices/usersApiSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';



const BlogPage = () => {
    const { t  } = useTranslation();

    const [newsLetter, { isLoading:isLoading2 }] = useNewsletterMutation();
    const [email,setEmail] = useState('')

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleSectionClick = () => {
      setIsModalVisible(!isModalVisible);
    };

    const letterHandler = async (e) => {
        e.preventDefault()
        try {
      
            const res = await newsLetter({
              email
            }).unwrap();
      console.log(res)
          
      toast.success(res);   

          } catch (err) {
            toast.error('You have already subscribed to our newsletter');
           
            
          }
    }
    return (
        <>
        <Meta title={'تمرات - المدونة - معلومات عامة شجر النخيل'} />
        <div className="blog-container" dir="rtl">
          <div className="blog-content">
              
         

            <div className="blog-right position-relative">
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
              <FaAlignJustify color='#7C9D64' />
              <span>مدونة تمرات</span>
              </div>
              <div className='mobile-modal'>
              <div className='d-flex align-items-center gap-2 '>
                  <div onClick={handleSectionClick}>
                  <div className='advanced-button'>
      <FaAlignJustify className='icon' color='white' />
      <span>كل المقالات</span>
    </div>
                  </div>
             
              {isModalVisible && (
        <div className='title-modal w-100' style={{'opacity':'1'}}>
          <div className='title-modal-body'>
          <span class="close" onClick={handleSectionClick}>×</span>
       
              <h2 className='all-title mt-5' style={{ marginRight: '40px' }}>جميع المقالات</h2>
             
              <Link className='d-flex gap-1 mb-2 ' to={'/blog/معلومات-عامة-شجر-النخيل'} style={{'marginTop':'50px'}}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">معلومات عامة شجر النخيل</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أنواع-التمور-في-العالم'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">أنواع التمور في العالم</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/ماهو-نوع-السكر-في-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">ما هو نوع السكر في التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/الفوائد-الصحية-المترتبة-من-تناول-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">ما هي الفوائد الصحية المترتبة من تناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/متى-ينصح-بتناول-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">متى ينصح بتناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أهمية-الألياف-في-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">أهمية الألياف في التمر</p>
              </Link>

            
    
            
          </div>
        </div>
      )}
              </div>
              </div>
                </div>
              {/* Content for the right section */}
              <div className='wrapper'>
              <h2 className="blog-title">شجرة النخيل: أسرار البقاء وتأثيرها الجذري على حضارات العالم</h2>
              <h5 className="small-text mt-5">في هذه الصفحة</h5>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">أهمية اكتشاف الأسرار المرتبطة بالأشياء التي استمرت منذ آلاف السنين.</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0' />
                <p className="align-items-center underlined-text ">أهمية شجرة النخيل في حياتنا وتاريخها العريق</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">تاريخ شجرة النخيل والآثار المكتشفة التي تعود إلى ما قبل 6000 سنة</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">دور التمور كعنصر غذائي أساسي في حضارات الشرق الأوسط وأفريقيا</p>
              </div>
              </div>
              <Image className="mt-5" src={string} alt="string of fresh dates" fluid />
    
              <p style={{ marginTop: '10%' }}>
                إن وجود الأشياء على حالها منذ آلاف السنين، يجعلنا نفكر في مدى أهمية اكتشاف الأسرار المرتبطة بوجودها في عالمنا. ولهذا يجب علينا أن نعيد النظر في الكثير من الأمور المرتبطة ببقاء هذه الأشياء في حياتنا ودراستها بشيء من التدقيق. ومن هذه الأشياء الباقية منذ فجر التاريخ شجرة النخيل والتمر.
              </p>
    
              <p>
                يُعد شجر النخيل من أقدم الأشجار المثمرة التي عرفها الإنسان، حيث يعود تاريخ أول الآثار المكتشفة لشجر النخيل إلى ما قبل 6000 سنة. وتشير الدراسات إلى اعتمد الأنسان في الحضارات القديمة - وبخاصة الشعوب التي سكنت منطقة الشرق الأوسط وأفريقيا - على التمور كعنصر أساسي في غذائها لسنوات عديدة إلى جانب حليب الإبل.
              </p>
    
              <h3>معلومات عامة شجر النخيل</h3>
              <p>
                الاسم العلمي لشجرة النخيل هو Phoenix dactylifera وهو اسم يوناني - حيث استمد اليونانيون هذا الاسم من الاسم الدلالي لطائر الفينيق في الحضارة المصرية القديمة.
              </p>
    
              <p>
                حيث تشير الأقاويل إلى أن من مميزات شجرة النخيل أنها تستطيع الاستمرار في النمو إذا تعرضت للحرق أو التدمير، أو قد تظهر نخلة ثانية من فروعها. وهذا ما جعلها ترتبط بطائر الفينيق، والذي يشار له بأنه الطائر الذي يمكن أن يولد من جديد من آلامه.
              </p>
    
              <p>
                الاسم باللغة الإنجليزية: Date Palm
                <br />
                الاسم باللغة العربية: تمر
                <br />
                الاسم باللغة الهندية: Khajoor and Chehra
                <br />
                الاسم باللغة الفارسية: Khorma
              </p>
              {/* Add any content for the right side */}
            </div>
            <div className="blog-border-vertical"></div>
    
            <div className="blog-left desktop-modal">
              {/* Content for the left section */}
              <div className='title-wrapper'>
              <h2 className='all-title' style={{ marginRight: '40px' }}>جميع المقالات</h2>
              <div className='border-bottom'></div>
              <Link className='d-flex gap-1 mb-2 ' to={'/blog/معلومات-عامة-شجر-النخيل'} style={{'marginTop':'50px'}}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">معلومات عامة شجر النخيل</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أنواع-التمور-في-العالم'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">أنواع التمور في العالم</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/ماهو-نوع-السكر-في-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">ما هو نوع السكر في التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/الفوائد-الصحية-المترتبة-من-تناول-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">ما هي الفوائد الصحية المترتبة من تناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/متى-ينصح-بتناول-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">متى ينصح بتناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أهمية-الألياف-في-التمر'}>
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">أهمية الألياف في التمر</p>
              </Link>
    
              </div>
              {/* Add any content for the left side */}
            </div>
          </div>
        </div>

<div className="notfecation text-center" style={{marginBottom:'-20px'}}>
<form onSubmit={letterHandler}>
<h3 className="mb-3">{t('news1')}</h3>
<input className="form-control w-25" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('news2')} required />
{isLoading2 ? (
<button type="submit" className="logbu " style={{margin:'auto'}} >
<Spinner animation="border" role="status">
</Spinner> 
</button>
                  ) :(
                    <button type='submit'>{t('news3')}</button>
                  )}

</form>
</div>

        </>
      );
    
};

export default BlogPage;