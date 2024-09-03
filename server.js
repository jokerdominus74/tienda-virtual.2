const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7586;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
const uri = 'mongodb+srv://tiendavirtualblue7:tienda.virtual2025@tienda.ecfpy.mongodb.net/base_datos-virtual?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
const userRoutes = require('./routes/userRoutes'); // Ruta de registro
app.use('/api/users', userRoutes);

const userRoutesLogin = require('./routes/userRoutesLogin'); // Ruta de inicio de sesión
app.use('/api', userRoutesLogin);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
