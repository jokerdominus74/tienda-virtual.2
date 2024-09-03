// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">Sobre Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Servicios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">Registrarse</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



