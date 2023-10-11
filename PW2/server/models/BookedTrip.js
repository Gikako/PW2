const mongoose = require('mongoose');

const viajeSeparadoSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: 'Usuario incompleto' },
    viaje: { type: mongoose.Schema.Types.ObjectId, ref: 'Viaje', required: 'Viaje incompleto' },
    escalas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Escala' }]
});

const ViajeSeparado = mongoose.model('ViajeSeparado', viajeSeparadoSchema);

module.exports = ViajeSeparado;