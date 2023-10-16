const ViajeSeparado = require('./models/BookedTrip');
const { validationResult } = require('express-validator');

// Controlador para crear un nuevo viaje separado
const crearViajeSeparado = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { usuario, viaje, escalas } = req.body;

    try {
        // Crear un nuevo viaje separado
        const nuevoViajeSeparado = new ViajeSeparado({ usuario, viaje, escalas });
        await nuevoViajeSeparado.save();
        res.status(201).json({ mensaje: 'Viaje separado creado correctamente', viajeSeparado: nuevoViajeSeparado });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todos los viajes separados
const obtenerTodosViajesSeparados = async (req, res) => {
    try {
        const viajesSeparados = await ViajeSeparado.find().populate('usuario').populate('viaje').populate('escalas');
        res.status(200).json(viajesSeparados);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener viajes separados por usuario
const obtenerViajesSeparadosPorUsuario = async (req, res) => {
    const userId = req.params.userId;

    try {
        const viajesSeparados = await ViajeSeparado.find({ usuario: userId }).populate('usuario').populate('viaje').populate('escalas');
        res.status(200).json(viajesSeparados);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para modificar un viaje separado
const modificarViajeSeparado = async (req, res) => {
    const { usuario, viaje, escalas } = req.body;
    const viajeSeparadoId = req.params.viajeSeparadoId;

    try {
        const viajeSeparado = await ViajeSeparado.findById(viajeSeparadoId);
        if (!viajeSeparado) {
            return res.status(404).json({ error: 'Viaje separado no encontrado' });
        }

        viajeSeparado.usuario = usuario;
        viajeSeparado.viaje = viaje;
        viajeSeparado.escalas = escalas;

        await viajeSeparado.save();
        res.status(200).json({ mensaje: 'Viaje separado modificado correctamente', viajeSeparado });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para eliminar un viaje separado
const eliminarViajeSeparado = async (req, res) => {
    const viajeSeparadoId = req.params.viajeSeparadoId;

    try {
        const viajeSeparado = await ViajeSeparado.findByIdAndDelete(viajeSeparadoId);
        if (!viajeSeparado) {
            return res.status(404).json({ error: 'Viaje separado no encontrado' });
        }

        res.status(200).json({ mensaje: 'Viaje separado eliminado correctamente', viajeSeparado });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearViajeSeparado,
    obtenerTodosViajesSeparados,
    obtenerViajesSeparadosPorUsuario,
    modificarViajeSeparado,
    eliminarViajeSeparado
};