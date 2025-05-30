import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type lang = 'vn' | 'en';

type Setting = {
    lang: lang;
};

const initialState: Setting = {
    lang: 'en',
};

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setLanguage: (state: Setting, action: PayloadAction<lang>) => {
            state.lang = action.payload;
        },
    },
});

export const { setLanguage } = settingSlice.actions;

export default settingSlice.reducer;
