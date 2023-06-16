import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { ContactsApi } from './api/ContactsApi';
import { AuthApi } from './api/AuthApi';
import { FilterSlice } from './slice/FilterSlice';
import { AuthSlice } from './slice/AuthSlise';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, AuthSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    filter: FilterSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ContactsApi.reducerPath]: ContactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    AuthApi.middleware,
    ContactsApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
