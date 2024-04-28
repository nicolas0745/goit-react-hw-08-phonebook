import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Contacts } from '../../pages/contacts/Contacts';
import { Login } from '../../pages/login/Login';
import { Register } from '../../pages/register/Register';
import { Layout } from 'components/layout/Layout';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';
import { useEffect } from 'react';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { RestrictedRoute } from '../restrictedRoute/RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>cargando usuario...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

export { App };
