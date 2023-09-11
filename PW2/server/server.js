require('dotenv').config()

const app = require('./app')
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/fast_traveler', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.on('error', (error) => {
    console.log("No se pudo conectar a la BD: " + error.message)
})

mongoose.connection.once('open', () => {
    console.log("Conexión exitosa")
})

app.listen(2322, () => {
    console.log("Servidor activo y escuchando el puerto 2322")
})