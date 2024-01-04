import React, { useState } from 'react';
import { faPlus, faMinus ,faX} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector , useDispatch} from 'react-redux';
import { logout } from '../slices/authSlice';

const MobileNavigationMenu = ({closeMenu}) => {
    const { userInfo } = useSelector((state) => state.auth);
    const { t , i18n} = useTranslation();
    const navigate = useNavigate();

  const [isDatesAccordionOpen, setDatesAccordionOpen] = useState(false);

  const toggleDatesAccordion = () => {
    setDatesAccordionOpen(!isDatesAccordionOpen);
  };

  const changeAr = () => {
    i18n.changeLanguage('ar');
  };


  const changeEn = () => {
    i18n.changeLanguage('en');
  };

  const dispatch = useDispatch();
    const handleLogout = () => {
        navigate('/');
        dispatch(logout());

    }
 

  return (
    <nav className={`has-scrollbar ${i18n.language === 'ar' ? 'mobile-navigation-menu_ar' : 'mobile-navigation-menu'}`} >
    <div className="menu-top">
        <h2 className="menu-title">{t('header20')}</h2>
        <button className="menu-close-btn headbutton" data-mobile-menu-close-btn>
            <i className="fas fa-times"></i>
            {/* <img src={cancel} width="20" height="20"  /> */}
            <FontAwesomeIcon icon={faX} className="add-icon" onClick={closeMenu}/>

        </button>
    </div>
    <ul className="mobile-menu-category-list">
        <li className="menu-category">
            <Link to="/" className="menu-title" onClick={closeMenu}> {t('header1')}</Link>
        </li>
        <li className="menu-category">
        <button className="accordion-menu headbutton" onClick={() => toggleDatesAccordion()}>
            <p className="menu-title">{t('header2')}</p>
            <div>
              <FontAwesomeIcon icon={isDatesAccordionOpen ? faMinus : faPlus} className="add-icon" />
            </div>
          </button>

        {isDatesAccordionOpen && (
            <ul className="submenu-category-list" >
                <li className="submenu-category">
                    <Link to="/ajwa-date" className="submenu-title" onClick={closeMenu}>{t('header3')}</Link>
                </li>
                <li className="submenu-category">
                    <Link to="/sukari-date" className="submenu-title" onClick={closeMenu}>{t('header4')}</Link>
                </li>
                <li className="submenu-category">
                    <Link to="/majhool-date" className="submenu-title" onClick={closeMenu}>{t('header5')}</Link>
                </li>
                <li className="submenu-category">
                    <Link to="/mabroom-date" className="submenu-title" onClick={closeMenu}>{t('header6')}</Link>
                </li>
                <li className="submenu-category">
                    <Link to="/sagie-date" className="submenu-title" onClick={closeMenu}>{t('header7')}</Link>
                </li>
                <li className="submenu-category">
                    <Link to="/shopping" className="submenu-title" onClick={closeMenu}>{t('header24')}</Link>
                </li>
            </ul>
        )}
            
        </li>
       
        <li className="menu-category">
            <Link to={'/date-packages'} className="menu-title" onClick={closeMenu}>{t('header8')}</Link>
        </li>
        <li className="menu-category">
            <Link to={'/blog/معلومات-عامة-شجر-النخيل'} className="menu-title" onClick={closeMenu}> {t('header9')}</Link>
        </li>
        <li className="menu-category">
            <Link to={'/contact-us'} className="menu-title" onClick={closeMenu}>{t('header10')}</Link>
        </li>
    </ul>
    <div className="menu-bottom">
        <ul className="menu-category-list">
            <li className="menu-category">
                <button className="accordion-menu headbutton" data-accordion-btn>
                    <p className="menu-title">{t('header21')}</p>
                    <i className="fas fa-caret-back caret-back"></i>
                </button>
                <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category" onClick={changeEn}>
                        <Link  to={'#'} className="submenu-title" onClick={closeMenu}>English</Link>
                    </li>
                    <li className="submenu-category" onClick={changeAr}>
                    <Link  to={'#'}  className="submenu-title" onClick={closeMenu}>العربية</Link>
                    </li>
                </ul>
            </li>
        </ul>
        {/* <ul className="menu-social-container">
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
        </ul> */}
        {userInfo &&
        <button className='btn btn-send' style={{color:'black'}} onClick={handleLogout}>{t('header22')}</button>
        }
        
    </div>
</nav>
  );
};

export default MobileNavigationMenu;
