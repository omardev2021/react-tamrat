import React from 'react';
import { Link } from 'react-router-dom';
import fruit from '../../assets/fruit-date-boxes.webp'
import { useTranslation } from 'react-i18next';
import Meta from '../../components/Meta';

const Blog = () => {
  const { t , i18n } = useTranslation();


  return (
    <div className='mi' dir='rtl'>
         {i18n.language == 'en' ? (
<Meta title={'Tamrat Dates - Tamrat Blog'}/>
         ) : (
<Meta title={'تمرات - مدونة تمرات'}/>
         )}
      <section className="home mi" id="home">
        <div className="home-text ">
          <h2 className="home-title">مدونة تمرات</h2>
          <span className="home-subtitle">كل ما يخص التمور في مكان واحد</span>
        </div>
      </section>

      <section style={{ padding: '5%' }} dir='rtl'>
        <div className="post">
          {/* Post Box 1 */}
          <div className="post-box" dir="ltr">
            <img src={fruit}  alt="" className="post-img" />
            <Link to="/dates-and-how-they-differ" className="post-title mt-2">
            انواع التمور وكيف تختلف
            </Link>
            <span className="post-date">مايو 2023</span>
            <p className="post-description">
            التمور هي ثمار نخيل التمر وهي واحدة من أشهر الفواكه في العالم العربي والشرق الأوسط. لا تقتصر فوائد التمور على القيمة الغذائية العالية فحسب، بل تتميز أيضًا بالطعم اللذيذ والقوام الفريد. يوجد العديد من أنواع التمور، وفي هذا المقال سنلقي نظرة على أبرز هذه الأنواع وكيف تختلف عن بعضها.
            </p>
            {/* Profile */}
            <div className="profile">
              <Link style={{ color: '#e6c98a' }} to="/dates-and-how-they-differ">قراءة المزيد</Link>
            </div>
          </div>

          {/* Post Box 2 */}
          <div className="post-box" dir="ltr">
            <img  src={fruit} alt="" className="post-img" />
            <Link to="/health-benefits-of-dates" className="post-title mt-2">
            الفوائد الصحية للتمور
            </Link>
            <span className="post-date">مايو 2023</span>
            <p className="post-description">
            تمور النخيل هي فاكهة شهيرة ومحبوبة في العالم العربي والإسلامي، وهي أيضاً تعتبر من الفواكه المفضلة لدى الكثيرين في أنحاء مختلفة من العالم. وتتميز التمور بفوائد صحية عديدة، وهي عالية الفيتامينات والمعادن والألياف، كما أنها تحتوي على نسبة عالية من السكريات الطبيعية، والتي تعطي الجسم الطاقة وتحسن الحالة النفسية. في هذا المقال، سنتعرف على أهم الفوائد الصحية لتناول التمور.
            </p>
            {/* Profile */}
            <div className="profile">
              <Link style={{ color: '#e6c98a' }} to="/health-benefits-of-dates">قراءة المزيد</Link>
            </div>
          </div>

          {/* Post Box 3 */}
          <div className="post-box" dir="ltr">
            <img src={fruit}  alt="" className="post-img" />
            <Link to="/dates-for-breaking-the-fast" className="post-title mt-2">
            لماذا يفضل الإفطار على التمر بعد الصيام؟
            </Link>
            <span className="post-date">مايو 2023</span>
            <p className="post-description">
            الإفطار على التمر بعد الصيام هو تقليد قديم ومشهور يمارسه المسلمون في جميع أنحاء العالم خلال شهر رمضان المبارك. وفقًا للسنة النبوية، كان النبي محمد صلى الله عليه وسلم يفطر على التمر قبل الصلاة. هذه العادة ليست فقط تقليدًا دينيًا، ولكنها تحمل أيضًا فوائد صحية عديدة. في هذا المقال، سنناقش أسباب تفضيل الإفطار على التمر بعد الصيام.
            </p>
            {/* Profile */}
            <div className="profile">
              <Link style={{ color: '#e6c98a' }} to="/dates-for-breaking-the-fast">قراءة المزيد</Link>
            </div>
          </div>

         
        </div>
      </section>

      <div className="notfecation text-center">
        <h3 className="mb-3">Subscribe to the newsletter</h3>
        <input className="form-control w-25" type="email" name="" id="" placeholder="E-mail" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Blog;
