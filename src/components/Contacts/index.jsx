import { useEffect } from 'react';
import ContactsItem from 'components/Contacts/ContactsItem';
import { LS_SAVEDCONTACTS } from 'redux/contacts';
import styles from './contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  useEffect(() => {
    window.localStorage.setItem(LS_SAVEDCONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id} id={id} name={name} number={number} />
      ))}
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
