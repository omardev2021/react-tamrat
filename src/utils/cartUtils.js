export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  export const updateCart = (state) => {

    
    if(localStorage.getItem('couponInfo')) {
      const couponInfoString = localStorage.getItem('couponInfo');
const couponInfo = JSON.parse(couponInfoString);
const couponName = couponInfo?.coupon_discount;
const itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
const discount = addDecimals(itemsPrice * (couponName / 100 || 0));

// Default to 0 if couponName is not available or not a number
console.log(state.discount);
      
         // Calculate the items price
    state.itemsPrice = addDecimals(
      state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0) 
    );
    
  
    // Calculate the shipping price
    // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

    if(state.itemsPrice > 250) {
          state.shippingPrice = addDecimals(0);
    }

    else {
      if(state.shippingAddress.country == 'Saudi Arabia' || state.shippingAddress.country == 'المملكة العربية السعودية') {

        state.shippingPrice = addDecimals(25);
      }else{
        state.shippingPrice = addDecimals(200);
      }

    }
  
    // Calculate the tax price
    state.discount = addDecimals(discount);
    // Calculate the total price
    state.totalPrice = (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) -
      Number(discount) 
    ).toFixed(2);
  
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state));
  
    return state;
    } else {
         // Calculate the items price
    state.itemsPrice = addDecimals(
      state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  
    // Calculate the shipping price
    // state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);
    if(state.itemsPrice > 250) {
      state.shippingPrice = addDecimals(0);
}

else {
  if(state.shippingAddress.country == 'Saudi Arabia' || state.shippingAddress.country == 'المملكة العربية السعودية') {

    state.shippingPrice = addDecimals(25);
  }else{
    state.shippingPrice = addDecimals(200);
  }

}
  
    // Calculate the tax price
    state.discount = Number(0);
  
    // Calculate the total price
    state.totalPrice = (
      Number(state.itemsPrice) +
      Number(state.shippingPrice) 
      
    ).toFixed(2);
  
    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state));
  
    return state;
    }
 
  };

  