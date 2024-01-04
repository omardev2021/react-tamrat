import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from './store';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ShoppingScreen from './screens/ShoppingScreen';

import AjwaDates from './screens/categories/AjwaDates';
import SagieDates from './screens/categories/SagieDates';
import SukariDates from './screens/categories/SukariDates';
import MabroomDates from './screens/categories/MabroomDates';
import MajhoolDates from './screens/categories/MajhoolDates';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/header.css';

import OrderScreen from './screens/OrderScreen';
import i18n from './i18n';
import SizesScreen from './screens/SizesScreen';
import ProfileScreen from './screens/ProfileScreen';

import ContactScreen from './screens/ContactScreen';
import PrivacyPolicy from './screens/policies/PrivacyScreen';
import ReturnPolicy from './screens/policies/ReturnScreen';
import FailScreen from './screens/status/FailScreen';
import SuccessScreen from './screens/status/SuccessScreen';

import FaqScreen from './screens/FaqScreen';
import SearchScreen from './screens/SearchScreen';
import AdminRoute from './components/AdminRoute';
import OrderListScreen from './screens/admin/OrderListScreen';
import ReceiptsScreen from './screens/admin/ReceiptsScreen';
import NewslettersScreen from './screens/admin/NewslettersScreen';
import ContactsScreen from './screens/admin/ContactsScreen';
import BlogPage from './screens/blog/BlogPage';
import Article1 from './screens/blog/Article1';
import Article2 from './screens/blog/Article2';
import Article3 from './screens/blog/Article3';
import Article4 from './screens/blog/Article4';
import Article5 from './screens/blog/Article5';




const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/products/:slug' element={<ProductScreen />} />
      <Route path='/orders/:id' element={<OrderScreen />} />
      <Route path='/cart' element={<CartScreen />} />
      <Route path='/shipping' element={<ShippingScreen />} />
      <Route path='/payment' element={<PaymentScreen />} />
      <Route path='/placeorder' element={<PlaceOrderScreen />} />
      <Route path='/shopping' element={<ShoppingScreen />} />
      <Route path='/ajwa-date' element={<AjwaDates />} />
      <Route path='/sukari-date' element={<SukariDates />} />
      <Route path='/sagie-date' element={<SagieDates />} />
      <Route path='/majhool-date' element={<MajhoolDates />} />
      <Route path='/mabroom-date' element={<MabroomDates />} />
      <Route path='/date-packages' element={<SizesScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/contact-us' element={<ContactScreen />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/return-policy' element={<ReturnPolicy />} />
      <Route path='/fail' element={<FailScreen />} />
      <Route path='/success' element={<SuccessScreen />} />

      <Route path='/blog/معلومات-عامة-شجر-النخيل' element={<BlogPage />} />
      
      <Route path='/blog/أنواع-التمور-في-العالم' element={<Article1 />} />
      <Route path='/blog/ماهو-نوع-السكر-في-التمر' element={<Article2 />} />
      <Route path='/blog/الفوائد-الصحية-المترتبة-من-تناول-التمر' element={<Article3 />} />
      <Route path='/blog/متى-ينصح-بتناول-التمر' element={<Article4 />} />
      <Route path='/blog/أهمية-الألياف-في-التمر' element={<Article5 />} />

  


      <Route path='/frequently-asked-questions' element={<FaqScreen />} />

      <Route path='/shopping/products/search' element={<SearchScreen />} />

      <Route path='' element={<AdminRoute />}>
  <Route path='/admin/orderlist' element={<OrderListScreen />} />
  <Route path='/admin/contacts' element={<ContactsScreen />} />

  <Route path='/admin/newsletters' element={<NewslettersScreen />} />

  <Route path='/admin/receipts' element={<ReceiptsScreen />} />

</Route>

    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <Provider store={store}>
    <RouterProvider router={router} /> 
    </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
