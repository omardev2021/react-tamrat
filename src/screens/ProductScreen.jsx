
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card,Form, Container} from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import size1 from '../assets/size1.png';
import size2 from '../assets/size2.png';
import size3 from '../assets/size3.png';
import size4 from '../assets/size4.png';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import Meta from '../components/Meta';


const ProductScreen = () => {
  const { slug: productId } = useParams();
  const dispatch = useDispatch(); // <-- add this
  const { t , i18n } = useTranslation();

  const [qty, setQty] = useState(1); // <-- add this

  const [currentImage, setCurrentImage] = useState('');
  

  const [kiloImage, setKiloImage] = useState(size2);
  const [halfImage, setHalfImage] = useState(size1);
  const [sevenImage, setSevenImage] = useState(size3);
  const [oneImage, setOneImage] = useState(size4);


  const handleKiloImage= (newImagePath) => {
    if(currentImage == size2 ) {
      console.log('dddd')
      setCurrentImage(product.product.image_path);
      setKiloImage(size2)
    }else {
      setCurrentImage(newImagePath);
      setKiloImage(product.product.image_path)
    }
    
  };


  const handleHalfImage= (newImagePath) => {
    if(currentImage == size1 ) {
      console.log('dddd')
      setCurrentImage(product.product.image_path);
      setHalfImage(size1)
    }else {
      setCurrentImage(newImagePath);
      setHalfImage(product.product.image_path)
    }
    
  };


  const handleSevenImage= (newImagePath) => {
    if(currentImage == size3 ) {
      console.log('dddd')
      setCurrentImage(product.product.image_path);
      setSevenImage(size3)
    }else {
      setCurrentImage(newImagePath);
      setSevenImage(product.product.image_path)
    }
    
  };

  const handleOneImage= (newImagePath) => {
    if(currentImage == size4 ) {
      console.log('dddd')
      setCurrentImage(product.product.image_path);
      setOneImage(size4)
    }else {
      setCurrentImage(newImagePath);
      setOneImage(product.product.image_path)
    }
    
  };




  
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  if(isLoading) {
    return (<>
       <div className='d-flex text-center align-items-center p-5  gap-1 ml-5'>
       <Skeleton height={20} width={100} />

 </div>
      <Container>
        <Row>
          <Col md={6}>
            <Skeleton height={300} width={400} />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Skeleton height={20} width={100} />
                <Skeleton height={30} width={250} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={20} width={250} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={20} width={200} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={120} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Skeleton height={20} width={100} />
                  <Skeleton height={30} width={250} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Skeleton height={20} width={200} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Skeleton height={20} width={150} />
                </ListGroup.Item>
                <ListGroup.Item>
                  <Skeleton height={40} width={150} />
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <h1 className="title">
            <Skeleton height={20} width={150} />
            <hr className='mt-2' style={{ opacity: 1, color: '#DAB155', width: '100px', margin: 'auto', height: '8px', borderWidth: '5px' }} />
          </h1>
  
          {[1, 2, 3].map((index) => (
            <Col sm={4} key={index} className='mb-5'>
              <Card className="text-center">
                <div className="card-img">
                  <Skeleton height={150} />
                </div>
                <div className="card-body">
                  <span><Skeleton height={20} width={120} /></span>
                  <br />
                  <span><Skeleton height={20} width={120} /></span>
                </div>
                <Skeleton height={40} width={120} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      </>
    );
  }

  
    // add this
    const addToCartHandler = () => {
      dispatch(addToCart({ ...product.product, qty }));
      toast.success('Product Added To Your Cart!');
      // navigate('/cart');
    };

return (
  <>
     {i18n.language == 'en' ? (
       <>
       <Meta title={`Tamrat Dates - ${product.product.name_en}`}/>
   <div className='d-flex text-center align-items-center p-5  gap-1 ml-5'>
   <Link to={'/'}>
   <span className='text-decoration-underline'>Home</span>
   </Link>
   <FaAngleRight />
   {isLoading ? (
     <div></div>
    ) : error ? (
      <div>{error?.data?.message || error.error}</div>
    ) : (
      <span style={{color:'#7C9D64'}}>{product.product.name_en}</span>

    )}
 </div>
 </>
    ) : (
      <>
        <Meta title={`تمرات - ${product.product.name_ar}`}/>
      <div className='d-flex text-center align-items-center p-5  gap-1 ml-5'>
      <Link to={'/'}>
      <span className='text-decoration-underline'>الرئيسية</span>
      </Link>
      <FaAngleLeft />
      {isLoading ? (
     <div></div>
    ) : error ? (
      <div>{error?.data?.message || error.error}</div>
    ) : (
      <span style={{color:'#7C9D64'}}>{product.product.name_ar}</span>

    )}
    </div>
</>
    )}
  <Container>
    {/* <Link className='btn btn-light my-3' to='/'>
      {t('back')}
    </Link> */}
    {isLoading ? (
    <Loader />
    ) : error ? (
      <div>{error?.data?.message || error.error}</div>
    ) : (
      <>
        <Row>
        <Col md={6}>
      {/* Main image */}
      <Image src={currentImage || product.product.image_path} alt={product.product.name_en} fluid />


      {/* Secondary images as icons with click functionality */}
        {
          product.product.weight == 1.00 && (
            <Image
    
            src={kiloImage}
            className='mt-2'
            width={200}
            alt={product.product.name_en}
            fluid
            onClick={() => handleKiloImage(size2)}
          />
     
          ) 
        }

{
          product.product.weight == .50 && (
            <Image
    
            src={halfImage}
            className='mt-2'
            width={200}
            alt={product.product.name_en}
            fluid
            onClick={() => handleHalfImage(size1)}
          />
     
          ) 
        }


{
          product.product.weight == .30 && (
            <Image
    
            src={sevenImage}
            className='mt-2'
            width={200}
            alt={product.product.name_en}
            fluid
            onClick={() => handleSevenImage(size3)}
          />
     
          ) 
        }


{
          product.product.weight == .10 && (
            <Image
    
            src={oneImage}
            className='mt-2'
            width={200}
            alt={product.product.name_en}
            fluid
            onClick={() => handleOneImage(size4)}
          />
     
          ) 
        }

        
      
    </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
              <Rating
                  value={product.product.rating}
                  text={`${product.product.numReviews}`}
                />
                <h3 className='mt-1'>{i18n.language === 'en' ? product.product.name_en :product.product.name_ar}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
              {i18n.language === 'en' ? product.product.origin_en :product.product.origin_ar}
              </ListGroup.Item>
              <ListGroup.Item>{t('price')} {product.product.price} {t('sar')}</ListGroup.Item>
              <ListGroup.Item>
                {i18n.language === 'en' ? product.product.description_en :product.product.description_ar}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>{t('price')}</Col>
                    <Col>
                      <strong>{product.product.price} {t('sar')}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>{t('status')}</Col>
                    <Col>
                      {product.product.countInStock > 0 ? t('in') : t('out')}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>{t('qty')}</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                       
                             
                            
                                {[...Array(product.product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                <ListGroup.Item>
                  <button
                  id="check"
                    className='btn btn-buy w-100'
                    type='button'
                    disabled={product.product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    {t('add')}
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
        <h1 className="title">
            {t('sim')} 
            <hr className='mt-2' style={{ opacity: 1, color: '#DAB155', width: '100px', margin: 'auto', height: '8px', borderWidth: '5px' }} />

            </h1>

          {product.similar.map((product) => (
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
  <button className="btn-buy mt-4">{t('home4')}</button>
</Link>
  </Card>
</Col>
          ))}
        </Row>
      </>
    )}
  </Container>
  </>
);
};

export default ProductScreen;