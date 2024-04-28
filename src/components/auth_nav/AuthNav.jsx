import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import css from './AuthNav.module.css';
import { ButtonUi } from '../buttonUi/Button';

const AuthNav = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const onHandleLogout = () => {
    console.log('hola');
    dispatch(logOut());
  };
  return user ? (
    <div className={css.container}>
      {/* <NavLink to="/contacts" className={css.link}>
        Contacts
      </NavLink> */}
      <p>{user.name}</p>
      <ButtonUi text="Logout" type="button" onHandleClick={onHandleLogout} />
      {/* <button onClick={onHandleLogout}>logOut</button> */}
    </div>
  ) : (
    <div>
      <p>correo@gmail.com</p>
      <button>logOut</button>
    </div>
  );
};

export { AuthNav };
