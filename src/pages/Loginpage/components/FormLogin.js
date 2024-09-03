import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Login.css';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7586/api/login', {
        email,
        password,
      });

      setSuccess('Inicio de sesión exitoso!');
      setError('');
      console.log(response.data);

      // Redirige a la página de inicio
      navigate('/home');
    } catch (err) {
      console.error('Error de autenticación:', err);
      if (err.response && err.response.status === 401) {
        setError('Correo electrónico o contraseña incorrectos.');
      } else {
        setError('Error al iniciar sesión. Inténtalo nuevamente más tarde.');
      }
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default FormLogin;