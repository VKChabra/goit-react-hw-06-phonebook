import styles from './contactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import PropTypes from 'prop-types';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contactsListItem}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsItem;
