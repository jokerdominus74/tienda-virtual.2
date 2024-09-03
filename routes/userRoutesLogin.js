const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Asegúrate de que esto apunta a tu modelo correcto

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Datos recibidos:', { email, password });

  try {
    // Convertir el email a minúsculas para hacer la búsqueda insensible a mayúsculas
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      console.log('Usuario no encontrado');
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos.' });
    }

    // Comparar la contraseña ingresada con la contraseña encriptada
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log('Contraseña incorrecta');
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos.' });
    }

    // Si la autenticación es correcta
    res.status(200).json({ message: 'Inicio de sesión exitoso.' });
  } catch (err) {
    console.error('Error del servidor:', err.message);
    res.status(500).json({ message: 'Error del servidor', error: err.message });
  }
});

module.exports = router;
