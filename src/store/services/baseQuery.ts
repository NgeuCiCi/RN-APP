import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query';
import { ENV } from '../../config';

const baseQuery = fetchBaseQuery({
    baseUrl: ENV.SERVER_BASE_URL,
});

export const CustomFetchBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
) => {
    const result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> = await baseQuery(
        args,
        api,
        extraOptions,
    );

    if (result.error) {
        return { error: result.error };
    }
    return result;
};
