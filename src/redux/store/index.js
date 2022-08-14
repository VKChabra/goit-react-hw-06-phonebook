import { configureStore } from '@reduxjs/toolkit';
import contacts from 'redux/contacts';
import { setLocalStorage } from 'redux/localStorage';

const store = configureStore({
  reducer: {
    contacts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(setLocalStorage),
});

export default store;
