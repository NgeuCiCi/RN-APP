import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { PersistConfig } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { listMiddleware } from './middleware';
import { rootReducer } from './rootReducer';

type ReducersState = ReturnType<typeof rootReducer>;

export const persistConfig: PersistConfig<ReducersState> = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'version', 'setting'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(listMiddleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
