const Viaje = require('./models/Travel.js'); // Importa el modelo Viaje
const { validationResult } = require('express-validator');

// Controlador para crear un nuevo viaje
const crearViaje = async (req, res) => {
    // Realiza validaciones utilizando express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const nuevoViaje = new Viaje(req.body);
        await nuevoViaje.save();
        res.status(201).json({ mensaje: 'Viaje creado correctamente', viaje: nuevoViaje });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para actualizar un viaje existente
const actualizarViaje = async (req, res) => {
    const { id } = req.params;

    // Realiza validaciones utilizando express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const viajeActualizado = await Viaje.findByIdAndUpdate(id, req.body, { new: true });
        if (!viajeActualizado) {
            return res.status(404).json({ error: 'Viaje no encontrado' });
        }
        res.status(200).json({ mensaje: 'Viaje actualizado correctamente', viaje: viajeActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener un viaje por su ID
const obtenerViajePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const viaje = await Viaje.findById(id);
        if (!viaje) {
            return res.status(404).json({ error: 'Viaje no encontrado' });
        }
        res.status(200).json(viaje);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todos los viajes
const obtenerTodosLosViajes = async (req, res) => {
    try {
        const viajes = await Viaje.find();
        res.status(200).json(viajes);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearViaje,
    actualizarViaje,
    obtenerViajePorId,
    obtenerTodosLosViajes,
};