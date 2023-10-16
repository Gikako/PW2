const mongoose = require('mongoose');

const escalaSchema = new mongoose.Schema({
    ciudad: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: 'Ciudad de escala incompleta' },
    llegada: { type: Date, required: 'Fecha de llegada incompleta' }
});

const Escala = mongoose.model('Escala', escalaSchema);

module.exports = Escala;