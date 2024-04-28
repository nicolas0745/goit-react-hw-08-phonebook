import { NavLink } from 'react-router-dom';
import css from './LoginNav.module.css';

const LoginNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export { LoginNav };
