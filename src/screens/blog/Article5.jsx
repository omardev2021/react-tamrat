// BlogPage.jsx
import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { FaAlignJustify, FaAngleLeft } from 'react-icons/fa';
import string from '../../assets/blog5.jpeg'
import {  useNewsletterMutation} from '../../slices/usersApiSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';



const Article5 = () => {
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
                         <Meta title={'تمرات - المدونة - أهمية الألياف في التمر'} />

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
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">متى ينصح بتناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أهمية-الألياف-في-التمر'}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">أهمية الألياف في التمر</p>
              </Link>

            
    
            
          </div>
        </div>
      )}
              </div>
              </div>
                </div>
              {/* Content for the right section */}
              <div className='wrapper'>
              <h2 className="blog-title">فوائد التمر: دور مضادات الأكسدة وتأثيرها الإيجابي على صحة الجسم</h2>
              <h5 className="small-text mt-5">في هذه الصفحة</h5>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">التمر والحضارة الإنسانية</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0' />
                <p className="align-items-center underlined-text ">التمر في شهر رمضان</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">السلوكيات الغذائية في رمضان</p>
              </div>

              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">أهمية الألياف في التمر</p>
              </div>

              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">مضادات الأكسدة وفوائد صحية</p>
              </div>

              
            
            
              </div>


    
              

              <p style={{ marginTop: '10%' }}>
              ارتبط التمر بالحضارة الإنسانية بشكل كبير، فهو يعد واحد من أقدم أنواع الفاكهة القديمة التي اكتشفها واستهلاكها الإنسان منذ آلاف السنين. بالإضافة إلى ذلك فهو واحد من أكثر أنواع الغذاء التي استطاعت أن تصمد على مر الزمان، وتطورت لتصبح رمزاً ذا أهمية غذائية عالية.
              </p>

              <p>
              وفي الحضارة الإسلامية ارتبط التمر بشهر رمضان المبارك، الذي يعتبر برنامجاً تدريبياً روحياً مثيراً، ينخرط فيه مسلمي العالم في الكثير من الأنشطة والسلوكيات، التي تعمل على تعزيز الانضباط والتأمل الذاتي والارتباط بمعاني إيمان الفرد.

              </p>

              <p>
              وعلى الرغم من أن المهمة الأساسية في هذا الشهر هي الصيام والتي تتضمن الامتناع عن الطعام والشراب والعلاقات الحميمة من الفجر وحتى غروب الشمس، لكنه مرتبط بالكثير من الطقوس التي تختلف من مكان لآخر.

              </p>

              <Image className='my-4'  src={string} alt="string of fresh dates" fluid />

    
              
    <h3>السلوكيات الغذائية في رمضان</h3>
              
              <p>
              يتضمن الصيام في شهر رمضان المبارك عدم تناول أي مصدر من مصادر الطاقة خلال فترة الصيام، بحيث يصبح جسم الإنسان في نهاية اليوم مرهقاً في بعض الأحيان. ويرتبط هذا النقص في العناصر الغذائية إلى شعورنا بالجوع بخاصة لنقص كمية السكر التي يتم تناولها خلال اليوم، ولهذا السبب نشعر بالافتقاد الطاقة التي نملكها للقيام بالنشاطات المختلفة.
              </p>
              <p>
              ولكن إذا نظرنا بتمعن للتقاليد الإسلامية في الإفطار، فنجد أنها توصينا دائماً بالبدء بتناول بعض التمرات، وعدم البدء بتناول الوجبة الرئيسية مباشرة.
              </p>

              <p>
              فهل هذا الأمر استوقفك أو تسألت عنه مسبقاً؟ أو بمعنى آخر هل تسألت يوماً لماذا يوصى بالإفطار على التمر؟ أو لماذا يعتبر التمر من الثمار الأساسية التي تعتمد عليها الأسر المسلمة في معظم أنحاء العالم؟

              </p>
<h3>أهمية الألياف في التمر
</h3>
              <p>
              منذ فجر الإسلام أوصنا الرسول صل الله عليه وسلم بتناول التمر وعلمنا الكثير من فوائده على الجسم، وكان عليه الصلاة والسلام يشجع الصحابة على الإفطار عليه. بالإضافة إلى ذلك ذُكر التمر والنخيل في القرأن 22 مرة، وهذا دليل آخر على مدى أهميته.
</p>
    <p>
    يحتوي التمر على العديد من الفيتامينات والمعادن التي تحافظ على صحة الجسم، 
كما يوفر السكر الموجود في التمور مصدر سريع للطاقة بعد يوم صيام طويل. وعلى الرغم من أن دخول السكر إلى جسم الإنسان يشكل خطر عليه، من حيث إنه يؤدي إلى رفع مستوى السكر في الدم بشكل كبير وسريع.

    </p>
          <p>
          لكن ما يميز التمر أنه غني بالألياف، والتي تعمل على إبطاء عملية امتصاص السكريات في الدم فيرتفع السكر في الدم بشكل بطيء. لهذا فهو يعد خيار مثالي لبدء وجبتك بعد صيام يوم طويل.

          </p>

          <p>
          إلى جانب ذلك يجب أن لا ننسى أهمية الألياف على صحة الجهاز الهضمي بشكل عام، فهي تمنع الإمساك وتحافظ على الميكروبيوم (البكتيريا والفطريات النافعة في الجهاز الهضمي).

          </p>

          <p>
          كما يحتوي التمر أيضاً على الكثير من مضادات الأكسدة، فيعمل على تعزيز الجهاز المناعي ويحمي الجسم بشكل كبير. لهذا فالتمر يعد بداية صحيحة لوجبة إفطار رمضانية، تساعد على العودة بشكل تدريجي لعادات الأكل الطبيعة للإنسان.

          </p>

          <p>
          ولا ننسى قول النبي الكريم  صل الله عليه وسلم عن التمر عن رواية سعد بن أبي وقاص: (مَن تَصَبَّحَ بسَبْعِ تَمَراتٍ عَجْوَةً، لَمْ يَضُرَّهُ ذلكَ اليومَ سُمٌّ، ولا سِحْرٌ) رواه مسلم.
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
                <FaAngleLeft color='#c0c0c0' />
                <p  className="align-items-center underlined-text-titles">متى ينصح بتناول التمر؟</p>
              </Link>

              <Link className='d-flex gap-1 mb-2' to={'/blog/أهمية-الألياف-في-التمر'}>
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">أهمية الألياف في التمر</p>
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

export default Article5;