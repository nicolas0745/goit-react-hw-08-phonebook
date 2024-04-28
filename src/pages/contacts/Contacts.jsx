// import { ContactForm } from '../contact-form/ContactForm';
import { ContactForm } from '../../components/contact-form/ContactForm';
// import { ContactList } from '../contact-list/ContactList';
import { ContactList } from '../../components/contact-list/ContactList';
// import { getIsLoading, getError } from '../../redux/selectors';
import { getIsLoading, getError } from '../../redux/selectors';
// import { Filter } from '../filter/Filter';
import { Filter } from '../../components/filter/Filter';
import css from './Contacts.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.div_container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p>error : {error}</p>
      ) : (
        <>
          <Filter /> <ContactList />
        </>
      )}
    </div>
  );
};

export { Contacts };
