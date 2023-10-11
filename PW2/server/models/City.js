const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
    nombre: { type: String, required: 'Nombre de la ciudad incompleto' },
    estado: { type: String, required: 'Estado incompleto' }
});

const Ciudad = mongoose.model('Ciudad', ciudadSchema);

module.exports = Ciudad;