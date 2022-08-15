import { configureStore } from '@reduxjs/toolkit';
import contacts from 'redux/contacts';
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['items'],
};

export const PERSISTED_CONTACTS = 'perstistedContacts';
const perstistedContacts = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: {
    perstistedContacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST],
      },
    }),
});

export let persistor = persistStore(store);
