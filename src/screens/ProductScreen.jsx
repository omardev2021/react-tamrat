import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { FaAngleLeft, FaAngleRight ,FaCartPlus , FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
import Meta from '../components/Meta';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Select from 'react-select';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const ProductScreen = () => {
  const { slug: productId } = useParams();
  const dispatch = useDispatch(); // <-- add this
  const { t , i18n } = useTranslation();

  const [qty, setQty] = useState(1); // <-- add this
  
const navigate = useNavigate();






  
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);


  const optionsKilo = [
    { value: '1.00', label: t('kg') },
    { value: '0.50', label: t('half') },
    { value: '0.30', label: t('seven') },
    { value: '0.10', label: t('box1') },
    // Add more options as needed
  ]; 

  const optionsHalf = [
    { value: '0.50', label: t('half') },
    { value: '1.00', label: t('kg') },
    { value: '0.30', label: t('seven') },
    { value: '0.10', label: t('box1') },
    // Add more options as needed
  ]; 

  const optionsSeven = [
    { value: '0.30', label: t('seven') },
    { value: '1.00', label: t('kg') },
    { value: '0.50', label: t('half') },
    { value: '0.10', label: t('box1') },
    // Add more options as needed
  ]; 

  const optionsOne = [
    { value: '0.10', label: t('box1') },
    { value: '1.00', label: t('kg') },
    { value: '0.50', label: t('half') },
    { value: '0.30', label: t('seven') },

    // Add more options as needed
  ]; 






   const [selectedKiloOption] = useState(optionsKilo[0]); 
   
   const [selectedHalfOption] = useState(optionsHalf[0]); // Set the default selected option
   const [selectedSevenOption] = useState(optionsSeven[0]); // Set the default selected option
   const [selectedOneOption] = useState(optionsOne[0]); // Set the default selected option

   
   
   // Set the default selected option

  const handleSelectChange = (selectedOption) => {
  
    if(selectedOption.value === '1.00') {

      navigate(`${product.product.kilo_url}`)
    } if (selectedOption.value === '0.50') {
      navigate(`${product.product.half_url}`)
    }if (selectedOption.value === '0.30') {
      navigate(`${product.product.seven_url}`)
    }if (selectedOption.value === '0.10') {
      navigate(`${product.product.one_url}`)
    }
    // Perform any additional logic based on the selected option
  };


    // Custom styles for react-select
    const customStyles = {
      control: (provided, state) => ({
        ...provided,
        border: '2px solid rgb(124, 157, 100)', // Border color
        borderRadius: '8px',
        boxShadow: state.isFocused ? '0 0 0 2px #4115BA' : 'none', // Add box shadow on focus
      }),
      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'rgb(124, 157, 100)' : 'white', // Background color for selected option
        color: state.isSelected ? 'white' : 'rgb(124, 157, 100)', // Text color
      }),
    };


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
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Skeleton height={20} width={200} />
          
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={20} width={250} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={20} width={200} />
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={120} width={600}/>
              </ListGroup.Item>
              <ListGroup.Item>
                <Skeleton height={80} width={600}/>
              </ListGroup.Item>
              
            </ListGroup>
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
      if(i18n.language === 'en') {
        toast.success('The product has been added to the cart!');

      } else {
        toast.success('!تمت اضافة المنتج الى السلة');

      }
      // navigate('/cart');
    };

return (
  <>
     {i18n.language === 'en' ? (
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
           {/* Image Slider */}
           <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}

              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              className="my-swiper"
            >
              {/* Main Image */}
              <SwiperSlide>
                <Image
                  src={product.product.image_path}
                  alt={product.product.name_en}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>

              {/* Additional Images */}
              <SwiperSlide>
              

{
          product.product.weight === "1.00" && (
            <Image
            src={size2}
            alt="Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
     
          ) 
        }

{
          product.product.weight === "0.50" && (
            <Image
            src={size1}
            alt="Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
     
          ) 
        }

{
          product.product.weight === "0.30" && (
            <Image
            src={size3}
            alt="Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
     
          ) 
        }

{
          product.product.weight === "0.10" && (
            <Image
            src={size4}
            alt="Image 2"
            style={{ width: '100%', height: 'auto' }}
          />
     
          ) 
        }






              </SwiperSlide>
              {/* Add more images as needed */}
            </Swiper>

     

        
      
    </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
              <Rating
                  value={product.product.rating}
                  text={`${product.product.numReviews}`}
                />
                <h3 className='mt-1' style={{'color':'black'}}>{i18n.language === 'en' ? product.product.name_en :product.product.name_ar}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
              {i18n.language === 'en' ? product.product.origin_en :product.product.origin_ar}
              </ListGroup.Item>
              <ListGroup.Item>{t('price')} {product.product.price} {t('sar')}</ListGroup.Item>
              <ListGroup.Item>
                {/* Product Availability Status with Font Awesome Icons */}
                {product.product.countInStock > 0 ? (
                  <div className="availability in-stock">
                    <FaCheckCircle color='green' className='mx-1' size={20}/>
                    <span>{t('in')}</span>
                  </div>
                ) : (
                  <div className="availability out-of-stock">
                    <FaTimesCircle color='red' className='mx-1' size={20}/>
                    <span>{t('out')}</span>
                  </div>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                {i18n.language === 'en' ? product.product.description_en :product.product.description_ar}
            
              </ListGroup.Item>
              <ListGroup.Item>
              {
          product.product.weight === "1.00" && (
            <Select
            value={selectedKiloOption}
            onChange={handleSelectChange}
            placeholder="Select an option"
            options={optionsKilo}
            styles={customStyles}
          />
     
          ) 
        }

{
          product.product.weight === "0.50" && (
            <Select
            value={selectedHalfOption}
            onChange={handleSelectChange}
            placeholder="Select an option"
            options={optionsHalf}
            styles={customStyles}
          />
     
          ) 
        }

{
          product.product.weight === "0.30" && (
            <Select
            value={selectedSevenOption}
            onChange={handleSelectChange}
            placeholder="Select an option"
            options={optionsSeven}
            styles={customStyles}
          />
     
          ) 
        }

{
          product.product.weight === "0.10" && (
            <Select
            value={selectedOneOption}
            onChange={handleSelectChange}
            placeholder="Select an option"
            options={optionsOne}
            styles={customStyles}
          />
     
          ) 
        }
              </ListGroup.Item>
              <ListGroup.Item>
                      <Row className='align-items-center'>
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
              <div>
                <button
                  id="check"
                    className='btn btn-buy w-100'
                    type='button'
                    disabled={product.product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    <FaCartPlus className='mx-2' size={24}/>
                    {t('add')}
                  </button>
              </div>
            </ListGroup>
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
  <button className="btn-buy-main mt-4 a-link">{t('home4')}</button>
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