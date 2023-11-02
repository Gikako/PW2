const express = require('express');
const app = express();
const { connection, connectToDatabase } = require('./db.js');

// Middleware para conectar a la base de datos y enviar un mensaje de respuesta
app.use(async (req, res, next) => {
  try {
    const message = await connectToDatabase();
    console.log(message); // Este mensaje se imprimirá en la consola del servidor
    next(); // Continúa con las siguientes operaciones después de la conexión exitosa
  } catch (error) {
    console.error('Error al conectar a la base de datos: ' + error.message);
    res.status(500).send('Error interno del servidor');
  }
});

// Resto de tu configuración de Express y rutas aquí...

const PORT = 2322;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});