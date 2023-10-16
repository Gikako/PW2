const Escala = require('./models/StopOver');
const { validationResult } = require('express-validator');

// Controlador para crear una nueva escala
const crearEscala = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { ciudad, llegada } = req.body;

    try {
        // Crear una nueva escala
        const nuevaEscala = new Escala({ ciudad, llegada });
        await nuevaEscala.save();
        res.status(201).json({ mensaje: 'Escala creada correctamente', escala: nuevaEscala });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todas las escalas
const obtenerTodasLasEscalas = async (req, res) => {
    try {
        const escalas = await Escala.find().populate('ciudad');
        res.status(200).json(escalas);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearEscala,
    obtenerTodasLasEscalas,
};