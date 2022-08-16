import ContactsItem from 'components/Contacts/ContactsItem';
import { useSelector } from 'react-redux';
import styles from './contacts.module.css';

const Contacts = () => {
  const contactsSelector = useSelector(state => state.perstistedContacts.items);
  const filterValueSelector = useSelector(
    state => state.perstistedContacts.filter
  );

  const normalizedFilter = filterValueSelector.trim().toLowerCase();
  const filteredContacts = contactsSelector.filter(contact =>
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
