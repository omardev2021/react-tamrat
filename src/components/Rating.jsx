import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Rating = ({ value, text }) => {
  const { t  } = useTranslation();

  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <FaStar color='#dbb157'/>
        ) : value >= 0.5 ? (
          <FaStarHalfAlt color='#dbb157' />
        ) : (
          <FaRegStar color='#dbb157'/>
        )}
      </span>
      <span>
        {value >= 2 ? (
          <FaStar color='#dbb157'/>
        ) : value >= 1.5 ? (
          <FaStarHalfAlt color='#dbb157' />
        ) : (
          <FaRegStar color='#dbb157'/>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <FaStar color='#dbb157'/>
        ) : value >= 2.5 ? (
          <FaStarHalfAlt color='#dbb157' />
        ) : (
          <FaRegStar color='#dbb157'/>
        )}
      </span>
      <span>
        {value >= 4 ? (
          <FaStar color='#dbb157'/>
        ) : value >= 3.5 ? (
          <FaStarHalfAlt color='#dbb157' />
        ) : (
          <FaRegStar color='#dbb157'/>
        )}
      </span>
      <span>
        {value >= 5 ? (
          <FaStar color='#dbb157'/>
        ) : value >= 4.5 ? (
          <FaStarHalfAlt color='#dbb157'  />
        ) : (
          <FaRegStar color='#dbb157'/>
        )}
      </span>
      <span className='rating-text'>{text} {t('reviews')}</span>
    </div>
  );
};

export default Rating;