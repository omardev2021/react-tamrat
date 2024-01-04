// BlogPage.jsx
import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { FaAlignJustify, FaAngleLeft } from 'react-icons/fa';
import string from '../../assets/blog4.jpeg'
import {  useNewsletterMutation} from '../../slices/usersApiSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';



const Article4 = () => {
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
                 <Meta title={'تمرات - المدونة - متى ينصح بتناول التمر؟'} />

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
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">متى ينصح بتناول التمر؟</p>
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
              <h2 className="blog-title">تمر الحياة وأسرارها: فوائد تناول التمر في مختلف مراحل اليوم وفي فترات مثل الحمل</h2>
              <h5 className="small-text mt-5">في هذه الصفحة</h5>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">تناول التمر على معدة فارغة</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0' />
                <p className="align-items-center underlined-text ">تناول التمر قبل ممارسة الرياضة</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">التمر للنساء الحوامل</p>
              </div>
            
            
              </div>


    
              

              <h3 style={{ marginTop: '10%' }}>متى ينصح بتناول التمر؟</h3>
              <p>
              يعد التمر من الوجبات الخفيفة الرائعة التي يمكن تناولها في أي وقت خلال اليوم، سواء في الصباح أو بعد الظهر أو في المساء. إلى جانب ذلك يمكن أن يكون تناول التمر في الأوقات التالية مثالياً:
              </p>

              <Image className='my-4'  src={string} alt="string of fresh dates" fluid />

    
              
    <h3>تناول التمر على معدة فارغة</h3>
              
              <p>
              يساعد تناول التمر على معدة فارغة في الصباح على تنظيف الجسم من المواد السامة التي يتعرض لها مثل: الالتهابات الميكروبية واستهلاك الكحول وغيرها. حيث يمكن تناول التمر مع فنجان من القهوة أو الشاي الصباحي،  أو تقطيع بعض حبات التمر وإضافتها إلى العصيدة أو الجرانولا.
              </p>
    <h3>تناول التمر قبل ممارسة الرياضة</h3>
              <p>
              يعد التمر من الأطعمة العالية بالطاقة، حيث يعتبر مناسب لاستهلاكه قبل ممارسة التمارين الرياضية، فيعمل على تعزيز مستوى الطاقة في الجسم ويزوده بالوقود اللازم للقيام بالتمارين ويساعد على التعافي بعد التمرين.
              </p>
              <h3>التمر مناسب للنساء الحوامل</h3>

              <p>
              يعتبر التمر طعام ممتاز للسيدات خلال فترة الحمل، حيث اثبتت الدراسات بأن تناول التمر في أواخر الحمل يعمل على تسريع المخاض ويقلل من خطر الألم والالتهابات بعد الولادة. كما تعمل الأحماض الأمينية في التمر كمنشط لعضلات الرحم، بالإضافة إلى أن التمور لها قدرة فريدة على تقليل النزيف بعد الولادة. وعلى الجانب الآخر فإن ثمار التمر تعمل على تعزيز الرغبة الجنسية وتنشط هرمون الحليب وذلك بسبب احتوائها على الأوكسيتوسين.

              </p>

              <p>
              قال سيمونيدس سيوس في القرن السادس قبل الميلاد ذات مرة: "إن للزمن أسنانًا حادة تدمر كل شيء، حتى أكثرها صلابة". ومن الأمور التي يجب علينا أن نعيها بأن الحياة مليئة بالكثير من الأسرار الكامنة، والتي من ضمنها الاسرار المرتبطة بشجر النخيل والتي نكتشفها يوماً بعد يوم.
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
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">متى ينصح بتناول التمر؟</p>
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

export default Article4;