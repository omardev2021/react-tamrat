import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: 'POST',
        body: data,
      }),
    }),
    sendSmsApi: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/sms`,
        method: 'POST',
        body: data,
      }),
    }),
    sendEmailApi: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/email`,
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login-user`,
        method: 'POST',
        body: data,
      }),
    }),

    contact: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/contact`,
        method: 'POST',
        body: data,
      }),
    }),

    newsletter: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/letter`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useContactMutation,useNewsletterMutation,useRegisterMutation, useLoginUserMutation , useSendEmailApiMutation,useSendSmsApiMutation } = usersApiSlice;

