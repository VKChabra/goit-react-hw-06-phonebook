import ContactsItem from 'components/Contacts/ContactsItem';
import { contacts, filterValue } from 'redux/contacts';
import { useSelector } from 'react-redux';
import styles from './contacts.module.css';

const Contacts = () => {
  const contactsImported = useSelector(contacts);
  const filterValueImported = useSelector(filterValue);

  const normalizedFilter = filterValueImported.trim().toLowerCase();
  const filteredContacts = contactsImported.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={styles.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default Contacts;
