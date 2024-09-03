import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Iniciar from './iniciar';
import Login from './pages/Loginpage/Login';
import Register from './pages/Registerpage/Register';
import Home from './pages/HomePage/Home';

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Iniciar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Rutas;
