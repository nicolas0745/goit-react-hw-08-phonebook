import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from '../../redux/contactsSlice';
import { getInputValue } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getInputValue);
  const onHandleChange = e => {
    const value = e.target.value;
    dispatch(searchContact(value));
  };

  return (
    <div className={css.container_filter}>
      <label>Find contacts by Name</label>
      <input
        id="1"
        type="text"
        name="filter"
        value={inputValue}
        onChange={onHandleChange}
      />
    </div>
  );
};

export { Filter };
