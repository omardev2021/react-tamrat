import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getShoppingProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping`,
        }),
        keepUnusedDataFor: 5,
      }),
      getSukariProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping/sukari`,
        }),
        keepUnusedDataFor: 5,
      }),
      getSagieProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping/sagie`,
        }),
        keepUnusedDataFor: 5,
      }),
      getAjwaProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping/ajwa`,
        }),
        keepUnusedDataFor: 5,
      }),
      getMabroomProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping/mabroom`,
        }),
        keepUnusedDataFor: 5,
      }),
      getMajhoolProducts: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/shopping/majhool`,
        }),
        keepUnusedDataFor: 5,
      }),

    getProductDetails: builder.query({
        query: (productId) => ({
          url: `${PRODUCTS_URL}/${productId}`,
        }),
        keepUnusedDataFor: 5,
      }),

      getCountries: builder.query({
        query: () => ({
          url: `${PRODUCTS_URL}/countries`,
        }),
        keepUnusedDataFor: 5,
      }),
      searchProduct: builder.mutation({
        query: (order) => ({
          url: `${PRODUCTS_URL}/shopping/search`,
          method: 'POST',
          body: { ...order },
        
        }),
      }),

      



  }),

  
});

export const { useGetProductsQuery,useSearchProductMutation,useGetCountriesQuery , useGetProductDetailsQuery , useGetShoppingProductsQuery , useGetAjwaProductsQuery, useGetMabroomProductsQuery,useGetMajhoolProductsQuery,useGetSagieProductsQuery,useGetSukariProductsQuery } = productsApiSlice;
