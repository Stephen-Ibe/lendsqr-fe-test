import { lazy } from 'react';
import { useRoutes } from 'react-router';

const Login = lazy(() => import('../pages/auth/Login'));

const AppRoutes = () => {
  const allRoutes = useRoutes([
    { path: '/', children: [{ element: <Login />, index: true }] },
  ]);

  return allRoutes;
};

export default AppRoutes;
