import { createSlice } from '@reduxjs/toolkit';
import { loadLS, setLS } from 'utils/localStorage';
import { useSelector } from 'react-redux';

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

const LS_SAVEDCONTACTS = 'Contacts';

const initialState = {
  items: loadLS(LS_SAVEDCONTACTS) ?? [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const setContactsLS = value => setLS(LS_SAVEDCONTACTS, value);

const contactsSlice = createSlice({
  name: CONTACTS_SLICE_NAME,
  initialState,
  reducers: {
    [ADD_CONTACT]: (state, action) => {
      state.items = [action.payload, ...state.items];
      setContactsLS(state.items);
    },
    [DELETE_CONTACT]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
      setContactsLS(state.items);
    },
    [SET_FILTER]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

export const useFilteredContacts = () => {
  const contactsSelector = useSelector(state => state.contacts.items);
  const filterValueSelector = useSelector(state => state.contacts.filter);

  const normalizedFilter = filterValueSelector.trim().toLowerCase();
  const filteredContacts = contactsSelector.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};
