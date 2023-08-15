import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div style={{ margin: '0px 50px 0px 50px' }}>{children}</div>
      <footer>Aqui vai o footer</footer>
    </>
  );
};

export default AuthLayout;
