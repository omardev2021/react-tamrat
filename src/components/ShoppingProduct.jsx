import React , {useState} from 'react'
import { Card,Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaMinus,FaPlus,FaCartPlus } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';


function ShoppingProduct({product}) {
    const { t , i18n } = useTranslation();
    const dispatch = useDispatch(); // <-- add this
    const [qty, setQty] = useState(1);

  const incrementValue = () => {
    
    setQty(qty + 1);
  };

  const minus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCartFirst = () => {
    
    dispatch(addToCart({ ...product, qty }));
    setQty(1);
    if(i18n.language === 'en') {
      toast.success('The product has been added to the cart!');
    
    } else {
      toast.success('!تمت اضافة المنتج الى السلة');

    }
    
  };

  return (
    <Card className="product-card">
    {/* Product Image */}
    <div className="card-img position-relative">
    {/* <Badge className="size-badge custom-badge">
<FontAwesomeIcon icon={faWeightHanging} />
<span className='mx-2'>كيلو</span>
</Badge> */}
      <img
        src={product.image_path}
        alt={product.name_en}
        className="img-fluid product-image"
      />
    </div>

    {/* Product Details */}
    <div className="card-body">
      <h5 className="product-name">{i18n.language === 'en' ? product.name_en : product.name_ar}</h5>
      <p className="product-origin">{i18n.language === 'en' ? product.origin_en : product.origin_ar}</p>

      {/* Price Section */}
      <div className="price-section d-flex justify-content-between">

        


{
product.weight === "1.00" ? (
<>
<Badge className=" custom-badge">
        
<FontAwesomeIcon icon={faWeightHanging} />
<span className='mx-2'>{t('kg')}</span>
</Badge>
<span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

</>
) : product.weight === "0.50" ? (
<>
<Badge className=" custom-badge">
        
<FontAwesomeIcon icon={faWeightHanging} />
<span className='mx-2'>{t('half')}</span>
</Badge>
<span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

</>
) : product.weight === "0.30" ? (
<>
<Badge className=" custom-badge">
        
<FontAwesomeIcon icon={faWeightHanging} />
<span className='mx-2'>{t('seven')}</span>
</Badge>
<span style={{'fontWeight':'bold','color':'red'}}>{t('out')}</span>

</>
) : product.weight === "0.10" ? (
<>
<Badge className=" custom-badge">
        
<FontAwesomeIcon icon={faWeightHanging} />
<span className='mx-2'>{t('box1')}</span>
</Badge>
<span style={{'fontWeight':'bold','color':'red'}}>{t('out')}</span>

</>
) : (
<>
<span style={{'fontWeight':'bold'}}>{product.price} {t('sar')}</span>

</>
)
}



      </div>

      <div className="price-section d-flex justify-content-between mt-3">
        <div className="count-qick mt-2 mr-3 mx-3 d-flex align-items-center">
        {i18n.language === 'en' ? (
<>
<FaMinus  onClick={minus}/>

    
<input type="text"  value={qty} disabled />


<FaPlus onClick={incrementValue}/>
</>
    ):(
<>


<FaPlus onClick={incrementValue}/>            
<input type="text"  value={qty} disabled />
<FaMinus  onClick={minus}/>


</>
    )}
        </div>
        <div>
        <button className="btn btn-qickshop" disabled={product.countInStock === 0} onClick={addToCartFirst}>
  <FaCartPlus />
  </button>
        </div>
 
        </div>
    </div>

    {/* Buy Button */}
    <Link to={`/products/${product.slug}`}>
      <button className="btn-buy w-100">{t('home4')}</button>
    </Link>
  </Card>
  )
}

export default ShoppingProduct