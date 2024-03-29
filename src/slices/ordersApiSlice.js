import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';


// Create a function to retrieve the token from local storage
const getTokenFromLocalStorage = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
    
      return parsedUserInfo.token;
    }
    console.log(' not found');
    return null; // Return null if the token doesn't exist
  };


  const token = getTokenFromLocalStorage();


export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: { ...order },
        headers: {
            Authorization: `Bearer ${token}`,
          },
      }),
    }),
    payOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}/payment`,
        method: 'POST',
        body: { ...order },
      
      }),
    }),
    confirmOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}/confirm`,
        method: 'POST',
        body: { ...order },
      
      }),
    }),
    uploadOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}/image/upload`,
        method: 'POST',
        body: { ...order },
      
      }),
    }),
    getOrderDetails: builder.query({
        query: (id) => ({
          url: `${ORDERS_URL}/${id}`,
        }),
        keepUnusedDataFor: 5,
      }),

      getMyOrders: builder.query({
        
        query: () => ({
          url: `${ORDERS_URL}/profile/mine`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
       
        keepUnusedDataFor: 5,
      }),

      getOrders: builder.query({
        query: () => ({
          url: ORDERS_URL,
        }),
        keepUnusedDataFor: 5,
      }),

      getReceipts: builder.query({
        query: () => ({
          url: `${ORDERS_URL}/admin/receipts`,
        }),
        keepUnusedDataFor: 5,
      }),
      getContacts: builder.query({
        query: () => ({
          url: `${ORDERS_URL}/admin/contacts`,
        }),
        keepUnusedDataFor: 5,
      }),
      getLetters: builder.query({
        query: () => ({
          url: `${ORDERS_URL}/admin/newsletters`,
        }),
        keepUnusedDataFor: 5,
      }),
      getShippments: builder.query({
        query: () => ({
          url: `${ORDERS_URL}/admin/shippments`,
        }),
        keepUnusedDataFor: 5,
      }),
      makeShippment: builder.mutation({
        query: (order) => ({
          url: `${ORDERS_URL}/admin/make-shippment`,
          method: 'POST',
          body: { ...order },
        
        }),
      }),
  }),
});

export const {useGetShippmentsQuery,useMakeShippmentMutation,useGetContactsQuery,useGetLettersQuery,useGetReceiptsQuery,useGetOrdersQuery, useCreateOrderMutation,useConfirmOrderMutation ,usePayOrderMutation ,useUploadOrderMutation, useGetOrderDetailsQuery,useGetMyOrdersQuery,} = ordersApiSlice;
