import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Help from '../pages/Help';
import DefaultLayout from '../config/layout/DefaultLayout';
import AuthLayout from '../config/layout/AuthLayout';
import Login from '../pages/auth/Login';
import RecoveryPassword from '../pages/auth/RecoveryPassword';
import SignIn from '../pages/auth/SignIn';
import Clients from '../pages/Clients';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout children={<Home />} />,
    errorElement: <h1>NOT FOUND</h1>
  },
  {
    path: '/products',
    element: <DefaultLayout children={<Products />} />
  },
  {
    path: '/clients',
    element: <DefaultLayout children={<Clients />} />
  },
  {
    path: '/contact',
    element: <DefaultLayout children={<Contact />} />
  },
  {
    path: '/help',
    element: <DefaultLayout children={<Help />} />
  },
  {
    path: '/auth',
    element: <AuthLayout children={<Login />} />,
    children: [
      {
        path: 'login',
        element: <AuthLayout children={<Login />} />
      },
      {
        path: 'recovery-password',
        element: <AuthLayout children={<RecoveryPassword />} />
      },
      {
        path: 'sign-in',
        element: <AuthLayout children={<SignIn />} />
      }
    ]
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
