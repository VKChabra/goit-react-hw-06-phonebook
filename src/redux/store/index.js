import { configureStore } from '@reduxjs/toolkit';
import contacts from 'redux/contacts';

export const store = configureStore({
  reducer: {
    contacts,
  },
});

export default store;
