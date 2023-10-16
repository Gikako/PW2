const mongoose = require('mongoose');

const compraSchema = new mongoose.Schema({
    fechaCompra: { type: Date, default: Date.now },
    viajeSeparado: { type: mongoose.Schema.Types.ObjectId, ref: 'ViajeSeparado', required: 'Viaje separado incompleto' },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: 'Usuario incompleto' }
});

const Compra = mongoose.model('Compra', compraSchema);

module.exports = Compra;