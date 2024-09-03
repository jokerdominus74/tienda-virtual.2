import React, { useState } from 'react';
import axios from 'axios';
import '../Register.css';

const FormRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    termsAccepted: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Añadir estado para el mensaje de éxito

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (!formData.termsAccepted) {
      setError('Debes aceptar los términos y condiciones');
      return;
    }
  
    setError('');
    setSuccess(''); // Limpiar el mensaje de éxito

    axios.post('http://localhost:7586/api/users/register', {
      username: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
    })
    .then(response => {
      console.log('Respuesta del servidor:', response.data);
      setSuccess(response.data.message); // Establecer el mensaje de éxito
    })
    .catch(error => {
      console.error('Detalles del error:', error.response ? error.response.data : error.message);
      setError('Error en el registro. Por favor, intenta nuevamente.');
    });
  };

  return (
    <div className="form-register">
      <h2>Registrarse</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>} {/* Mostrar el mensaje de éxito */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormRegister;
