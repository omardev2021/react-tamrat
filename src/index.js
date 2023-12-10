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
import LoginScreen from './screens/LoginScreen';
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
import Blog from './screens/blog/Blog';
import ContactScreen from './screens/ContactScreen';
import PrivacyPolicy from './screens/policies/PrivacyScreen';
import ReturnPolicy from './screens/policies/ReturnScreen';
import FailScreen from './screens/status/FailScreen';
import SuccessScreen from './screens/status/SuccessScreen';
import Benifits from './screens/blog/Benifits';
import Dates from './screens/blog/Dates';
import Why from './screens/blog/Why';
import FaqScreen from './screens/FaqScreen';
import SearchScreen from './screens/SearchScreen';


const language = i18n.language || 'ar'; // Default to Arabic if language is not set


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
      {/* <Route path='/login' element={<LoginScreen />} /> */}
      <Route path='/shopping' element={<ShoppingScreen />} />
      <Route path='/ajwa-date' element={<AjwaDates />} />
      <Route path='/sukari-date' element={<SukariDates />} />
      <Route path='/sagie-date' element={<SagieDates />} />
      <Route path='/majhool-date' element={<MajhoolDates />} />
      <Route path='/mabroom-date' element={<MabroomDates />} />
      <Route path='/date-packages' element={<SizesScreen />} />
      <Route path='/profile' element={<ProfileScreen />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact-us' element={<ContactScreen />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/return-policy' element={<ReturnPolicy />} />
      <Route path='/fail' element={<FailScreen />} />
      <Route path='/success' element={<SuccessScreen />} />
      <Route path='/health-benefits-of-dates' element={<Benifits />} />

      <Route path='/dates-and-how-they-differ' element={<Dates />} />
      <Route path='/dates-for-breaking-the-fast' element={<Why />} />
      <Route path='/frequently-asked-questions' element={<FaqScreen />} />

      <Route path='/shopping/products/search' element={<SearchScreen />} />

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
