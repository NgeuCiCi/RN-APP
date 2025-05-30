import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer, loginReducerPath } from './services/auth/services';
import { versionReducer, versionReducerPath } from './services/version/services';
import settingSlice from './slices/setting/settingSlice';
import userSlice from './slices/user/userSlice';

export const rootReducer = combineReducers({
    user: userSlice,
    setting: settingSlice,
    [loginReducerPath]: loginReducer,
    [versionReducerPath]: versionReducer,
});
