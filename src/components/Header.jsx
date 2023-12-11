import { useState } from 'react';
import { FaSearch, FaTrash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {  Container ,Offcanvas,Button
,
Row,
Col,
ListGroup,
Image,

FormControl
, NavDropdown
} from 'react-bootstrap';
import { FaShoppingCart, FaUser ,FaGripHorizontal ,FaHome} from 'react-icons/fa';
import { useSelector , useDispatch} from 'react-redux';
import logo from '../assets/logo.webp'
import LanguageSelector from './LanguageSelector';
import AuthModal from './AuthModal';
import { useTranslation } from 'react-i18next';
import { logout } from '../slices/authSlice';
import shipped from '../assets/shipped.png'
import cancel from '../assets/cancel-n.png'
import MobileNavigationMenu from './MobileNavigationMenu';
import { removeFromCart } from '../slices/cartSlice';


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [free, setFree] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t ,i18n} = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleSearch = () => {
    navigate(`/shopping/products/search?term=${searchTerm}`);

  }


const dispatch = useDispatch();
    const handleLogout = () => {
      navigate('/')
        dispatch(logout());

    }

    const handleMenu = () => {
setMenu(false)
    }
    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };

    return (
      <header dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
    {free && (
        <div className="py-1" style={{ backgroundColor: '#7C9D64' }}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <h6 className='text-center' style={{ margin: 'auto' }}>
              <Image src={shipped} width="40" height="40" style={{ margin: 'auto' }} /> {t('freeShipping')}
            </h6>
          </Col>
          <Col xs={{ order: 'first' }} className="text-end" style={{ position: 'absolute', right: '2%', top: '1.5%' }}>
            <Image src={cancel} width="20" height="20" onClick={() => setFree(false)} />
          </Col>
        </Row>
      </Container>
    </div>
    )}
    
 

      <Offcanvas show={show} onHide={handleClose} placement='end' dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('acc1')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup variant='flush' className='offScroll'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                <ul className="list-group list-group-flush" >
    
      <li key={item.id} className="list-group-item cart-item">
        <div className="d-flex gap-2">
          <div className="col-md-4">
            <img src={item.image_path} alt={item.name_en} className="img-fluid rounded" />
          </div>
          <div className="col-md-3">
            <Link to={`/products/${item.slug}`}>{i18n.language === 'en' ? item.name_en : item.name_ar}</Link>
          </div>
          <div className="col-md-2">{item.price}</div>
          <div className="col-md-2">
          <Button
              type='button'
              variant='light'
              onClick={() => removeFromCartHandler(item.id)}
            >
              <FaTrash />
            </Button>
          </div>
        </div>
      </li>
   
  </ul>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="text-center order" id="order" style={{ position: 'fixed', backgroundColor: 'white' }}>
            <hr />
            <h5>
            {t('acc2')}    {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} {t('sar')}
            </h5>
           

            <Link  to='/cart'>
      
   
                <button id="check" className="btn btn-buy mx-1 mb-2" onClick={handleClose}>
                {t('acc3')}
                </button>
                </Link>
           
            {/* <br>
            <a href="/basket">
                <button className="btn btn-buy">سلة التسوق</button>
            </a> */}
        </div>
        </Offcanvas.Body>
      </Offcanvas>
              <div className="header-top">
            <div className="container">
                <ul className="header-social-container">
                    {/* Add your social icons here */}
                </ul>
                <div className="header-user-actions">
                <button className="action-btn headbutton">
                {
                        userInfo ? (     <NavDropdown title={<FaUser size={30}/>} id="basic-nav-dropdown">
                          
                          <NavDropdown.Item>
                          <Link to={'/profile'}>
                            {t('account6')}  </Link></NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>{t('account7')}</NavDropdown.Item>
                      </NavDropdown>) : (<FaUser size={30} onClick={() => setShowModal(true)} />)
                    }
                
                </button>
                        <button className="action-btn headbutton" onClick={handleShow}>
                        <FaShoppingCart size={30}/>
                            <span className="count" > {cartItems.reduce((a, c) => a + c.qty, 0)}</span>
                        </button>
                    
                    {/* <span>lang</span> */}
                    <LanguageSelector />
                    
                </div>
            </div>
        </div>
      <div className="header-main">
          
          <div className="container">
              
          <Link  to='/' className='header-logo'>
                  <img src={logo} alt="Anon's logo" width="120" />
         </Link>
         <AuthModal show={showModal} handleClose={()=>setShowModal(false)} />

              <nav className="desktop-navigation-menu">
                  <div className="container">
                      <ul className="desktop-menu-category-list">
                          <li className="menu-category">
                         
                              <Link  to='/' className="menu-title">
                              {t('header1')}
                                </Link>
                          </li>
                          <li className="menu-category">
                              
                              <Link  to='/shopping' className="menu-title">
                              {t('header2')}
                                </Link>
                              <ul className="dropdown-list" style={{ position: 'absolute', top: '100%', left: 0 }}>
                                  <li className="dropdown-item">
                                  <Link  to='/ajwa-date' className="menu-title">
                                  {t('header3')}
                                </Link>
                                  </li>

                            
                                  <li className="dropdown-item">
                                  <Link  to='/sukari-date' className="menu-title">
                                  {t('header4')}
                                </Link>
                                  </li>
                                  <li className="dropdown-item">
                                  <Link  to='/majhool-date' className="menu-title">
                                  {t('header5')}
                                </Link>
                                  </li>
                                  <li className="dropdown-item">
                                  <Link  to='/mabroom-date' className="menu-title">
                                  {t('header6')}
                                </Link>
                                  </li>
                                  <li className="dropdown-item">
                                  <Link  to='/sagie-date' className="menu-title">
                                  {t('header7')}
                                </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className="menu-category">
                              <Link to="/date-packages" className="menu-title">{t('header8')}</Link>
                          </li>
                          <li className="menu-category">
                              <Link to="/blog" className="menu-title">{t('header9')}</Link>
                          </li>
                          {/* <li className="menu-category">
                              <a to="/about" className="menu-title">About us</a>
                          </li> */}
                          <li className="menu-category">
                              <Link to="/contact-us" className="menu-title">{t('header10')}</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
            
                {i18n.language === 'en' ? (
        <div style={{position:'relative'}}>
        <FormControl
      type="text"
      placeholder={t('find')}
      className="mr-sm-2 rounded-pill"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}

    /> 
    <FaSearch style={{position:'absolute',top:'15' ,right:'20'}} onClick={handleSearch}/>
        </div>
                ):(
                  <div style={{position:'relative'}}>
                  <FormControl
                type="text"
                placeholder={t('find')}
                className="mr-sm-2 rounded-pill"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
      
              /> 
              <FaSearch style={{position:'absolute',top:'15' ,left:'20'}} onClick={handleSearch}/>
                  </div>
                )}
          
               
          </div>
      </div>
      


      <div className="mobile-bottom-navigation">
            <button className="action-btn headbutton" data-mobile-menu-open-btn onClick={()=> setMenu(true)}>
            <FaGripHorizontal />
            </button>
                <button className="action-btn headbutton">
                <FaShoppingCart onClick={handleShow}/>
                    <span className="count">{cartItems.reduce((a, c) => a + c.qty, 0)}</span>
                </button>
            
                <Link to={'/'} className="action-btn headbutton">
                <FaHome />
                </Link>
         
            {userInfo ? (
                 <Link to={'/profile'} className="action-btn headbutton" >
                 <FaUser />
                 </Link>
            ) : (
                 <button type="button" className="action-btn headbutton" >
            <FaUser onClick={() => setShowModal(true)}/>
            </button>
            )}
        </div>


{menu && (
  <MobileNavigationMenu closeMenu={handleMenu}/>
)}

      {/* <nav className="mobile-navigation-menu has-scrollbar" >
          <div className="menu-top">
              <h2 className="menu-title">Menu</h2>
              <button className="menu-close-btn headbutton" data-mobile-menu-close-btn>
                  <i className="fas fa-times"></i>
              </button>
          </div>
          <ul className="mobile-menu-category-list">
              <li className="menu-category">
                  <a href="/home" className="menu-title">Home</a>
              </li>
              <li className="menu-category">
                  <button className="accordion-menu headbutton" data-accordion-btn>
                      <p className="menu-title">Dates</p>
                      <div>
                          <i className="fas fa-plus add-icon"></i>
                          <i className="fas fa-minus remove-icon"></i>
                      </div>
                  </button>
                  <ul className="submenu-category-list" data-accordion>
                      <li className="submenu-category">
                          <a href="/ajwa.date" className="submenu-title">Ajwa Date</a>
                      </li>
                      <li className="submenu-category">
                          <a href="/sukari.date" className="submenu-title">Sukari Date</a>
                      </li>
                      <li className="submenu-category">
                          <a href="/majhool.date" className="submenu-title">Majhool Date</a>
                      </li>
                      <li className="submenu-category">
                          <a href="/mabroom.date" className="submenu-title">Mabroom Date</a>
                      </li>
                  </ul>
              </li>
              <li className="menu-category">
                  <a href="/all-sizes" className="menu-title">Date Sizes</a>
              </li>
              <li className="menu-category">
                  <a href="/blog.index" className="menu-title">Blog</a>
              </li>
              <li className="menu-category">
                  <a href="/contact.us" className="menu-title">Contact us</a>
              </li>
          </ul>
          <div className="menu-bottom">
              <ul className="menu-category-list">
                  <li className="menu-category">
                      <button className="accordion-menu headbutton" data-accordion-btn>
                          <p className="menu-title">Language</p>
                          <i className="fas fa-caret-back caret-back"></i>
                      </button>
                      <ul className="submenu-category-list" data-accordion>
                          <li className="submenu-category">
                              <a rel="alternate" href="/en" className="submenu-title">English</a>
                          </li>
                          <li className="submenu-category">
                              <a rel="alternate" href="/ar" className="submenu-title">العربية</a>
                          </li>
                      </ul>
                  </li>
              </ul>
              <ul className="menu-social-container">
                  <li>
                      <a href="#" className="social-link">
                          <i className="fab fa-facebook"></i>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="social-link">
                          <i className="fab fa-twitter"></i>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="social-link">
                          <i className="fab fa-instagram"></i>
                      </a>
                  </li>
                  <li>
                      <a href="#" className="social-link">
                          <i className="fab fa-linkedin"></i>
                      </a>
                  </li>
              </ul>
              <span>logout</span>
          </div>
      </nav> */}
  </header>
    );
  };

export default Header;