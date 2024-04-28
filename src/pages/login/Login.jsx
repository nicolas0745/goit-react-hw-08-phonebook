import { LoginForm } from '../../components/loginForm/LoginForm';
import { Helmet } from 'react-helmet';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>login</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Helmet>
      <LoginForm />
    </>
  );
};

export { Login };
