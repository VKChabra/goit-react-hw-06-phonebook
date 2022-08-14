import styles from './app.module.css';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};
