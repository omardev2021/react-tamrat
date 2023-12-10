import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';


const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            // The item to add to the cart
            const item = action.payload;
      
            // Check if the item is already in the cart
            const existItem = state.cartItems.find((x) => x.id === item.id);
      
            if (existItem) {
              // If exists, update quantity
              state.cartItems = state.cartItems.map((x) =>
                x.id === existItem.id ? item : x
              );
            } else {
              // If not exists, add new item to cartItems
              state.cartItems = [...state.cartItems, item];
            }
      
            // Update the prices and save to storage
            return updateCart(state, item);
          },
          removeFromCart: (state, action) => {
            // Filter out the item to remove from the cart
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
          
            // Update the prices and save to storage
            return updateCart(state);
          },
          clearCartItems: (state, action) => {
            state.cartItems = []
            localStorage.setItem('cart', JSON.stringify(state))
          },
          saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
            localStorage.setItem('cart', JSON.stringify(state))
            updateCart(state);
          },
          savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            localStorage.setItem('cart', JSON.stringify(state));
          },
          setCoupon: (state, action) => {
            state.couponInfo = action.payload;
            localStorage.setItem('couponInfo', JSON.stringify(action.payload));
            updateCart(state);
          },
          removeCoupon: (state, action) => {
              state.couponInfo = null; // or whatever default value you want
              localStorage.removeItem('couponInfo'); 
              updateCart(state);// Corrected key to match what you used when setting
            },

    },
  });
  export const { addToCart ,removeFromCart,saveShippingAddress,savePaymentMethod,clearCartItems,setCoupon,removeCoupon} = cartSlice.actions;

  export default cartSlice.reducer;