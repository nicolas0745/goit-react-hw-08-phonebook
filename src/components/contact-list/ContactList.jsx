import css from './ContactList.module.css';
import { getContacts, getStatusFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonUi } from '../buttonUi/Button';

const getVisibleContacts = (contacts, filter) => {
  if (filter === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const onHandleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map(e => (
        <li key={e.id}>
          <p>
            <b>{e.name} :</b> {e.number}
          </p>
          {/* <button onClick={() => onHandleDelete(e.id)}>Delete</button> */}
          <ButtonUi
            text="Delete"
            type="button"
            onHandleClick={() => onHandleDelete(e.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export { ContactList };
