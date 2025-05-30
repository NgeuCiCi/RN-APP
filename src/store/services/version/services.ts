import { createApi } from '@reduxjs/toolkit/query/react';
import { CustomFetchBaseQuery } from '../baseQuery';

export const versionApi = createApi({
    reducerPath: 'versionService',
    baseQuery: CustomFetchBaseQuery,
    endpoints: (builder) => ({
        getDllVersion: builder.query({
            query: (body) => {
                return {
                    url: '',
                    method: 'POST',
                    body,
                };
            },
        }),

        getAppVersion: builder.mutation({
            query: (body) => {
                return { url: '', method: 'POST', body };
            },
        }),
        downloadNewVersion: builder.mutation({
            query: (body) => {
                return { url: '', method: 'POST', body };
            },
        }),
    }),
});

export const {
    middleware: middlewareVersion,
    reducer: versionReducer,
    reducerPath: versionReducerPath,
    useGetDllVersionQuery,
    useGetAppVersionMutation,
    useDownloadNewVersionMutation,
} = versionApi;
