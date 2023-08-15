import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Login</h1>
      <ButtonPrimary action={handleLogin} label="Entrar" type="contained" />
    </>
  );
};

export default Login;
