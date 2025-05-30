import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { loginApi } from '@store/services/auth/services';

interface SUser {
    info?: {
        name: string;
        phone: string;
    };
}
const initialState: SUser = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogout: () => {
            return {};
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(loginApi.endpoints.login.matchFulfilled, (state: any, action: PayloadAction<any>) => {
            state.info = action.payload.info;
        });
    },
});

export const { setLogout } = userSlice.actions;

export const action = userSlice.actions;

export default userSlice.reducer;
