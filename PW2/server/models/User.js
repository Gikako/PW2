const mongoose = require('mongoose')

const user = new mongoose.Schema({
    nombre: {type: String, required: 'Nombre incompleto'},
    apellido: {type: String, required: 'Apellido incompleto'},
    edad: {type: Number, required: 'Edad incompleta'},
    email: {type: String, required: 'Email incompleto'},
    contrasenia: {type: String, required: 'Contraseña incompleta'}
},{
    timestamps: true
})

module.exports = mongoose.model('Usuario', user)