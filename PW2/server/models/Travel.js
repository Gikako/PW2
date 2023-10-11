const mongoose = require('mongoose');

const viajeSchema = new mongoose.Schema({
    transporte: { type: String, enum: ['avion', 'autobus'], required: 'Tipo de transporte incompleto' },
    fechaSalida: { type: Date, required: 'Fecha de salida incompleta' },
    fechaRegreso: { type: Date, required: 'Fecha de regreso incompleta' },
    destino: { type: String, required: 'Destino incompleto' },
    costo: { type: Number, required: 'Costo incompleto' },
    proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor', required: 'Proveedor incompleto' },
    ciudadSalida: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: 'Ciudad de salida incompleta' }
});

const Viaje = mongoose.model('Viaje', viajeSchema);

module.exports = Viaje;



