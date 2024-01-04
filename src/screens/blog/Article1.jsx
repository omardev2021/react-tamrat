// BlogPage.jsx
import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { FaAlignJustify, FaAngleLeft } from 'react-icons/fa';
import string from '../../assets/blog1.jpeg'
import {  useNewsletterMutation} from '../../slices/usersApiSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';



const Article1 = () => {
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
          <Meta title={'تمرات - المدونة - أنواع التمور في العالم'} />
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
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">معلومات عامة شجر النخيل</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أنواع-التمور-في-العالم'}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">أنواع التمور في العالم</p>
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
              <h2 className="blog-title">أنواع التمور في العالم وفوائدها الغذائية: رحلة مثيرة في عالم الطعم والتنوع</h2>
              <h5 className="small-text mt-5">في هذه الصفحة</h5>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">أنواع التمور في العالم</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0' />
                <p className="align-items-center underlined-text ">المجهول أو المجدول: حلاوته الطاغية وعصارته الغنية</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">التمر السكري الطازج: شهير في المملكة العربية السعودية ومنطقة الخليج</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">التمر الخضري: نعومة وشعبية في المجتمعات الآسيوية</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">تمر الخلاص: نكهة مركبة وجودة عالية في المملكة العربية السعودية</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">تمر العجوة: داكن وناعم وغني بالفوائد الصحية</p>
              </div>
              </div>
    
              <p className='mt-5' style={{ marginTop: '10%' }}>
              يوجد في العالم أكثر من 600 نوع من أشجار النخيل، التي تختلف فيها التمور المنتجة في طعمها وملمسها ولونها بالإضافة إلى فوائدها الغذائية الكثيرة. حيث يتميز كل نوع من التمور بطابع مختلف واختلافات دقيقة ونكهات متعددة. من بين هذه الأنواع <span><a className='text-underline' target={'_blank'} href='https://tamratdates.com/majhool-date'>تمر المجهول</a></span> أو المجدول الذي يتميز بحلاوته الطاغية وبالعصارة الغنية التي يتركها في الفم. ويعد هذا النوع من التمور من أكثر الأنواع استهلاكاً في كل من المملكة المتحدة وأوروبا وأمريكا الشمالية.

              </p>

              <Image className='my-4'  src={string} alt="string of fresh dates" fluid />

    
              <p>
              ومن أصناف التمور الأكثر شعبية أيضاً <span><a className='text-underline' target={'_blank'} href='https://tamratdates.com/sukari-date'>التمر السكري</a></span> الطازج، والذي يوجد بشكل رئيسي في المملكة العربية السعودية، ويعتبر من أكثر الأنواع المرغوبة في منطقة الخليج العربي. يتميز تمر السكري بملمسه الخفيف والناعم وبنكهة كريمية جوزية غنية، إلى جانب طعم الحلاوة الخفيفة بالمقارنة مع تمر المجهول. 
              </p>
    
              
              <p>
              يتميز التمر الخضري بنعومة ملمسه ولونه الداكن، ويحظى بشعبية كبيرة في المجتمعات الآسيوية. ومن التمور المميزة أيضاً تمر الخلاص- يطلق عليه بالإنجليزية (quintessence)- وهو من التمور ذات الجودة العالية في المملكة العربية السعودية. يتمتع تمر الخلاص بطعم مركب لا يمكن اكتشافه إلا من خلال مضغه ببطء في الفم لاكتشاف النكهات المختلفة. حيث يحتوي مزيج النكهات في تمر الخلاص على كل من نكهة: العسل والكراميل والجوز الممزوجة برائحة غنية من التوفي. 
              </p>
    
              <p>
              أما <span><a className='text-underline' target={'_blank'} href='https://tamratdates.com/ajwa-date'>تمر العجوة</a></span> فهو داكن وناعم الملمس ويتميز بحلاوته الطاغية، ويزرع في غرب الجزيرة العربية. يتسم تمر العجوة بخصائصه الطبية المهمة، ولهذا فيعد من أشهر أنواع التمور وأغلاها ثمناً. وتنتمي تمر العجوة إلى المدينة المنورة والمناطق المجاورة لها في المملكة العربية السعودية. وهو أكثر أنواع التمور المفيدة نظراً لأثره الجيد على الصحة والتغذية بالمقارنة مع باقي الأنواع الأخرى.
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
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">معلومات عامة شجر النخيل</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أنواع-التمور-في-العالم'}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">أنواع التمور في العالم</p>
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

export default Article1;