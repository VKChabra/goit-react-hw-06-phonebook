import { createSlice } from '@reduxjs/toolkit';

const CONTACTS_SLICE_NAME = 'contacts';
const ADD_CONTACT = 'addContact';
const DELETE_CONTACT = 'deleteContact';
const SET_FILTER = 'setFilter';
export const CONTACTS_SLICE = {
  CONTACTS_SLICE_NAME,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_FILTER,
};

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: CONTACTS_SLICE_NAME,
  initialState,
  reducers: {
    [ADD_CONTACT]: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    [DELETE_CONTACT]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    [SET_FILTER]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
