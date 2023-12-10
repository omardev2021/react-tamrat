import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    couponInfo: localStorage.getItem('couponInfo')
    ? JSON.parse(localStorage.getItem('couponInfo'))
    : null,
};

const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    setCoupon: (state, action) => {
      state.couponInfo = action.payload;
      localStorage.setItem('couponInfo', JSON.stringify(action.payload));
    },
    removeCoupon: (state, action) => {
        state.couponInfo = null; // or whatever default value you want
        localStorage.removeItem('couponInfo'); // Corrected key to match what you used when setting
      },
  },
});

export const { setCoupon , removeCoupon} = couponSlice.actions;

export default couponSlice.reducer;
