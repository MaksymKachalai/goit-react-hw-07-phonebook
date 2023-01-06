import { configureStore } from '@reduxjs/toolkit';
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
import contactsSlice from './contactsSlice.js';
import filterSlice from './filterSlice';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistConfig2 = {
  key: 'filter',
  storage,
};

const persistContactsReducer = persistReducer(persistConfig, contactsSlice);

const persistFilterReducer = persistReducer(persistConfig2, filterSlice);

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filter: persistFilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
