import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';
import { FaCartPlus, FaMinus , FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next';


function Product({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch(); // <-- add this
  const { t , i18n} = useTranslation();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
    if(i18n.language === 'en') {
      toast.success('The product has been added to the cart!');

    } else {
      toast.success('!تمت اضافة المنتج الى السلة');

    }
    
  };

  return (
    <>
      <Col sm={12} md={4} >
        <div className="card text-center position-relative "> 
          <div className="card-img">
            <Image src={product.image_path} alt="ajaw fresh date" fluid className="w-75 sh" />
          </div>
          <div className="card-title mt-5">{i18n.language === 'en' ? product.name_en :product.name_ar}</div>
          <div className="card-body">
            <span>{i18n.language === 'en' ? product.origin_en :product.origin_ar}</span>
            <br />
            <span>{product.price} {t('sar')}</span>
          </div>
          <div className="card-footer">
            <button id="myBtn" className="btn-buy-main a-link" onClick={openModal}>
            {t('home3')}
            </button>
            
            <br />
            <Link to={`/products/${product.slug}`}>
              <button className="btn-buy-main mt-4 a-link"> {t('home4')}</button>
            </Link>
        
            {/* modal goes here... */}
            {showModal && (
                  <AnimatePresence>
                  <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
        <div className="modal w-100" >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4 className='mt-4'>{i18n.language === 'en' ? product.name_en :product.name_ar}</h4>
            <span className="mb-2">{i18n.language === 'en' ? product.origin_en :product.origin_ar}</span>
            <h4>{product.price} {t('sar')}</h4>
            <h4 hidden>{product.price}</h4>
            <div className="d-flex m-auto align-middle my-3">
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
              <button className="btn-qickshop" onClick={() => addToCartFirst(product.id)}>
              <FaCartPlus />
              </button>
            </div>
            <input type="number" value={product.id} hidden />
          </div>
        </div>
        </motion.div>
        </AnimatePresence>
      )}
    
          </div>
        </div>
      </Col>
    
    </>
  );
}

export default Product;