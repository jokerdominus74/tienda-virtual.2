const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta para registro
router.post('/register', async (req, res) => {
  const { username, name, email, password, address, phoneNumber } = req.body;

  try {
    // Crear un nuevo usuario
    const newUser = new User({
      username,
      name,
      email: email.toLowerCase(),
      password,  // La contraseña se encripta automáticamente en el modelo antes de guardarse
      address,
      phoneNumber,
    });

    // Guardar el usuario en la base de datos
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error.message); // Agregar más detalles a los logs
    res.status(400).json({ message: 'Error al registrar usuario', error: error.message });
  }
});

module.exports = router;
