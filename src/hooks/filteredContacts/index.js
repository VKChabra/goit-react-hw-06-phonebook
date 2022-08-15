import { useSelector } from 'react-redux';

export const useFilteredContacts = () => {
  const contactsSelector = useSelector(state => state.contacts.items);
  const filterValueSelector = useSelector(state => state.contacts.filter);

  const normalizedFilter = filterValueSelector.trim().toLowerCase();
  const filteredContacts = contactsSelector.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return filteredContacts;
};

export default useFilteredContacts;
