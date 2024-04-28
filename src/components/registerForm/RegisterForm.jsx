import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { ButtonUi } from '../buttonUi/Button';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <div className={css.container}>
      <form onSubmit={onHandleSubmit} className={css.form}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <ButtonUi text="Register" type="submit" />
      </form>
    </div>
  );
};

export { RegisterForm };
