// pages/Login.js
import React from 'react';
import FormLogin from './components/FormLogin';  // Ajusta la ruta según tu estructura de carpetas
import Footer from '../Reutilizables/Footer';

const Login = () => {
  return (
    <div className="login-page">
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
