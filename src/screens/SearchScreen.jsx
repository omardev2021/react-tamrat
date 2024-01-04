import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchProductMutation } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {  Row, Col, Card } from 'react-bootstrap';
import Loader from '../components/Loader';


function SearchScreen() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const term = queryParams.get('term');
    const [products, setProducts] = useState([]);
    const { t , i18n } = useTranslation();

    const [search, { isLoading }] = useSearchProductMutation();

    const searchHandler = async () => {
        try {
          
          const res = await search({
            term
          }).unwrap();
          setProducts(res.products)
    
          
        } catch (err) {
          console.log(err);
          
        }

      }

      useEffect(() => {
        searchHandler();
      }, [term]);

  return (
    <div>
        <h3 className='p-5 pb-0'>{t('resu')} {term}</h3>
              <Row className="py-5">
        {isLoading ? (
        <Loader />
      ) : (
            products.map((product) => (
            <Col sm={4} key={product.id} className='mb-5'>
              <Card className="text-center ">
                <div className="card-img">
                  <img
                    src={product.image_path}
                    alt={product.name_en}
                    className="img-fluid w-50"
                  />
                </div>
                <div className="card-body">
                  <span>{i18n.language === 'en' ? product.name_en :product.name_ar}</span>
                  <br />
                  <span>{i18n.language === 'en' ? product.origin_en :product.origin_ar}</span>
                </div>
                <Link to={`/products/${product.slug}`}>
              <button className="btn-buy-main mt-4 a-link">{t('home4')}</button>
            </Link>
              </Card>
            </Col>
             ))
             )}
        </Row>
    </div>
  )
}

export default SearchScreen