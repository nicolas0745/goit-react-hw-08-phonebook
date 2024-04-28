import { LoginNav } from '../login_nav/LoginNav';
import { useAuth } from '../../hooks/useAuth';
import { AuthNav } from '../auth_nav/AuthNav';
import css from './NavBar.module.css';
const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className={css.nav}>
      <span>WELCOME!</span>
      <div className={css.subMenu}>
        {isLoggedIn ? <AuthNav /> : <LoginNav />}
      </div>
    </nav>
  );
};

export { NavBar };
