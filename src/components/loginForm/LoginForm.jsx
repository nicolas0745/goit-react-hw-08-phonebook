import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { ButtonUi } from '../buttonUi/Button';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.container}>
      <form onSubmit={onHandleSubmit} className={css.form}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <ButtonUi text="Log In" type="submit" />
        {/* <button type="submit">Log In</button> */}
      </form>
    </div>
  );
};

export { LoginForm };
