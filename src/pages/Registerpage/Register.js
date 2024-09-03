// pages/Register.js
import React from 'react';
import FormRegister from './components/FormRegister';  // Ajusta la ruta según tu estructura de carpetas
import Footer from '../Reutilizables/Footer';

const Register = () => {
  return (
    <div className="register-page">
      <FormRegister />
      <Footer />
    </div>
  );
};

export default Register;
