const mongoose = require('mongoose');

const proveedorSchema = new mongoose.Schema({
    nombre: { type: String, required: 'Nombre del proveedor incompleto' },
    tipo: { type: String, enum: ['aerolinea', 'autobus'], required: 'Tipo de proveedor incompleto' }
});

const Proveedor = mongoose.model('Proveedor', proveedorSchema);

module.exports = Proveedor;