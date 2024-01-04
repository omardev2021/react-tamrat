import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

import { I18nextProvider } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  const { t ,i18n} = useTranslation();

  return (
    <>
    <I18nextProvider i18n={i18n}>
    <ToastContainer />
      <Header />
      <main className='py-3' dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <ScrollToTop />
          <Outlet />
    
      </main>
      <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;