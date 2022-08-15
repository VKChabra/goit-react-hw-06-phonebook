import ContactsItem from 'components/Contacts/ContactsItem';
import { useFilteredContacts } from 'redux/contacts';
import styles from './contacts.module.css';

const Contacts = () => {
  const filteredContacts = useFilteredContacts();
  return (
    <div className={styles.contactsList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

export default Contacts;
