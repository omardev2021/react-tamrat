// BlogPage.jsx
import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { FaAlignJustify, FaAngleLeft } from 'react-icons/fa';
import string from '../../assets/blog3.jpeg'
import {  useNewsletterMutation} from '../../slices/usersApiSlice';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Meta from '../../components/Meta';



const Article3 = () => {
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
         <Meta title={'تمرات - المدونة - ما هي الفوائد الصحية المترتبة من تناول التمر؟'} />
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
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">ما هي الفوائد الصحية المترتبة من تناول التمر؟</p>
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
              <h2 className="blog-title">شجر النخيل وتمره: الشبه بين الحياة النباتية والإنسان</h2>
              <h5 className="small-text mt-5">في هذه الصفحة</h5>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">تشابه شجر النخيل بالإنسان</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0' />
                <p className="align-items-center underlined-text ">الفوائد الصحية المترتبة من تناول التمر</p>
              </div>
              <div className='d-flex gap-2 mb-2'>
                <FaAngleLeft color='c0c0c0'/>
                <p className="align-items-center underlined-text">ما هي مضادات للأكسدة ؟</p>
              </div>
             
          
            
              </div>


    
              

              <p style={{ marginTop: '10%' }}>
              يعد شجر النخيل أشبه أنواع النباتات للإنسان، وذلك لأنه ينقسم إلى جنسين مميزين هما الذكر والأنثى، حيث تتم عملية التلقيح التي تحمل على إثرها الأنثى بالفاكهة. وعلى عكس معظم الأشجار، تعد نقطة النمو الرئيسية في شجر النخيل هي الرأس، والتي تشير إلى البرعم الطرفي الموجود في أعلى الشجرة. فإذا تعرض الرأس لأي حادث أو هجوم فإن باقي النبتة تموت، وهذا مثال مشابه للإنسان حيث إن أي ضرر قد يحدث في الجمجمة يؤثر على الجسم. إلى جانب ذلك تشير بعض الحكايات إلى أن شجرة النخيل يمكن أن تموت بسبب التوتر أو الصدمات العاطفية.
              </p>

              <Image className='my-4'  src={string} alt="string of fresh dates" fluid />

    
              
    <h3>ما هي الفوائد الصحية المترتبة من تناول التمر؟
</h3>
              
              <p>
              برغم من أن الفوائد الموجودة في ثمار التمر قد تكون غير معروفة للكثير من الناس، إلا أنه ومن خلال البحث في الفوائد الصحية في التمور، تم العثور على الكثير من المعلومات العلمية حول التأثيرات الدوائية لشجر النخيل والتي تم نشرها في الكثير المجلات الطبية العالمية مثل: Medline- SID- Pubmed- Google Scholar.
              </p>
    
              <p>
              حيث وجد لأشجار النخيل أكثر من 15 تأثير دوائي يمكن الحصول عليها من استخدام ثمارها وبذورها. وتُظهر هذه الدراسات بأن شجر النخيل يتمتع بخصائص مضادة للأكسدة ومضادة للالتهابات ومضادة لمرض السكري، كما يوجد له تأثير على تقدم الحمل والأعصاب ويعد منشط جنسي، إلى جانب تأثيره على نسبة السكر والدهون في الدم.
              </p>
<h3>الفوائد الصحية للتمر
</h3>
<p>فيما يلي أهم الأسباب التي ستجعلك تتناول التمر بشكل يومي: 
</p>
<h3>التمر غني بالألياف</h3>
              <p>
              تعد ثمار التمر مصدر غني بالألياف مقارنة مع أي أنواع أخرى من الفواكة يمكن أن يستهلكها الإنسان.

              </p>

              <p>
              إلى جانب ذلك يحتوي التمر على كمية منخفضة من الدهون والكوليسترول، وهذه العوامل تجعله مناسب في تقليل خطر الإصابة بأمراض القلب والسرطان.

              </p>

              <p>
              يحتوي التمر على كمية تتراوح ما بين  7.5 -8 ملجم/100 جرام من الألياف الغذائية، وتعتمد هذه الكمية على مراحل نضج ثمار التمر، حيث تبلغ نسبة وجود البكتين (من أنواع الألياف الغذائية) في التمور ما بين 0.5 - 3.9%. وتجدر الإشارة إلى أنه ثبت علمياً بأن الأطعمة التي تحتوي على البكتين تقلل من عامل الخطر الأيضي المرتبط بأمراض القلب.

              </p>

              <h3>التمر غني بالبوتاسيوم</h3>

              <p>
              يعد البوتاسيوم من أهم المعادن الأساسية التي يحتاجها جسم الإنسان، ليستطيع المحافظة على تقلصات العضلات بشكل مناسب بما فيها عضلة القلب. بالإضافة إلى ذلك يعزز البوتاسيوم من صحة الجهار العصبي والتمثيل الغذائي في الجسم.

              </p>

              <p>
              ويعتبر التمر من أغنى أنواع الفواكه في مستوياته العالية من البوتاسيوم، حيث يحتوي التمر على كمية عالية من البوتاسيوم بالمقارنة مع نسبة وجوده في الموز لكل جرام إلى جانب مستوى الصوديوم المنخفض فيه، وهذا يساعد في المحافظة على صحة الجهاز العصبي.

              </p>

              <h3>التمر غني بالفيتامينات والمعادن</h3>

              <p>
              يحتوي التمر على عدد من الفيتامينات مثل فيتامين C والذي يعتبر مضاد للأكسدة، وفيتامين A الذي يساعد في المحافظة على صحة الجلد. إلى جانب أنه مصدر غني بفيتامينات B1 وB2 وB6 وB9 وحمض النيكوتينيك، والتي لها دور مهم في الحفاظ على صحة الدم واستقلاب الكربوهيدرات والمحافظة على مستويات الجلوكوز في الدم.

              </p>
              <p>
              كما يحتوي التمر على العديد من الأحماض الدهنية المفيدة، والتي تعمل على تزويد الجسم بالطاقة وتساعد في تكوين خلايا الدم الحمراء والبيضاء. حيث يوفر كل 100 جرام من التمر على ما نسبته 9% من الاحتياجات اليومية الموصى بها للبالغين من الأحماض الدهنية.

              </p>

              <h3>التمر مصدر للمغنيسيوم</h3>

              <p>
              يحتوي التمر على نسبة عالية من المغنيسيوم، حيث يحتوي كل 100 جرام من التمر على أكثر من 15% من الكمية اليومية الموصى بها من السيلينيوم والمغنيسيوم والنحاس. ينظم المغنيسيوم نسبة الكالسيوم في الجسم ويساعد في نقله من الطعام إلى الدم، وهذا يساعد في تكوين العظام والحفاظ عليها قوية.

              </p>
<h3>التمر مصدر جيد بالبروتين</h3>
              <p>
              تكمن أهمية وجود البروتين في الجسم إلى ارتباط معظم الوظائف في جسم الإنسان- سواء كانت طبيعية أو مرتبطة بالمرض- ببروتين واحد أو أكثر. وعلى الرغم من أن التمر لا يعد مصدر غني بالبروتين، إلا أن نسبة البروتين فيه تعد مرتفعة بالمقارنة مع بعض الفواكه الأخرى مثل: التفاح والموز والبرتقال، وذلك بسبب احتوائه على أنواع مختلفة من الأحماض الأمينية.

              </p>

              <p>
              يتراوح متوسط محتوى البروتين في التمر ما بين 2.0% -6.4%، وهذا يعتمد على مراحل نضج ثمار التمر. وعلى الرغم من أن نسبة البروتينات الموجودة في التمر لا تلبي الاحتياجات اليومية الموصى بها والتي تقدر بـ (0.84 جم/كجم/يوم)، إلا أنه يساعد على توفير العديد من الأحماض الأمينية الأساسية المشابهة لبروتين البيض.

              </p>

              <h3>التمر مضاد للأكسدة والالتهابات والسرطان</h3>

              <p>
              يحتوي التمر على كميات كبيرة من مضادات الأكسدة، حيث يعتقد بأن مضادات الأكسدة تلعب دور مهم في الوقاية من أمراض القلب والأوعية الدموية والسرطانات والأمراض التنكسية العصبية مثل: مرض باركنسون والزهايمر. إلى جانب تأثيره الجيد على الالتهابات والشيخوخة.

              </p>
    <p>
    يُستهلك التمر في منطقة الشرق الأوسط بشكل كبير وذلك لفوائده الطبية المتعددة، حيث أظهرت الدراسات غنى التمر بالفينول والفلافونويدات، التي تحتوي على خصائص قوية مضادة  للأكسدة ومضادة للالتهابات ومضادة للسرطان. وقد أثبتت العديد من الدراسات أن الفواكه التي تحتوي على مضادات الأكسدة يمكن أن تساعد في الوقاية من السرطان ومشاكل القلب والأوعية الدموية، وهذا يعمل على زيادة عمر الإنسان بنسبة تقدر بحوالي 60%.

    </p>

    <h3>
    ما هي مضادات للأكسدة؟

    </h3>

    <p>
    مضادات الأكسدة هي مواد موجودة داخل الأطعمة، تعمل على تقليل التأثيرات التفاعلية بشكل كبير لعناصر مثل الأوكسجين التفاعلي والنيتروجين. حيث تعمل مضادات الأكسدة على تأخير أو منع أكسدة المواد بشكل كبير، عندما تكون موجودة في الأطعمة أو في الجسم بتركيزات منخفضة.

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
                <FaAngleLeft color='#7C9D64' />
                <p  className="align-items-center underlined-text-titles-active">ما هي الفوائد الصحية المترتبة من تناول التمر؟</p>
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

export default Article3;