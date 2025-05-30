import { createApi } from '@reduxjs/toolkit/query/react';
import { CustomFetchBaseQuery } from '../baseQuery';

export const loginApi = createApi({
    reducerPath: 'authService',
    baseQuery: CustomFetchBaseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<any, any>({
            query: ({ username, password }) => {
                return {
                    url: 'signin',
                    method: 'POST',
                    body: {
                        username,
                        password,
                    },
                };
            },
            transformResponse: (response: any) => {
                return {
                    ...response,
                    info: {
                        name: 'BTS',
                        phone: '0123456789',
                    },
                };
            },
        }),
    }),
});

export const {
    middleware: middlewareLogin,
    reducer: loginReducer,
    reducerPath: loginReducerPath,
    useLoginMutation,
} = loginApi;
