const Ciudad = require('./models/City');
const { validationResult } = require('express-validator');

// Controlador para crear una nueva ciudad
const crearCiudad = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, estado } = req.body;

    try {
        // Verificar si la ciudad ya existe
        const ciudadExistente = await Ciudad.findOne({ nombre });
        if (ciudadExistente) {
            return res.status(400).json({ error: 'La ciudad ya existe' });
        }

        // Crear una nueva ciudad
        const nuevaCiudad = new Ciudad({ nombre, estado });
        await nuevaCiudad.save();
        res.status(201).json({ mensaje: 'Ciudad creada correctamente', ciudad: nuevaCiudad });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para buscar ciudades por nombre
const buscarCiudadPorNombre = async (req, res) => {
    const nombreCiudad = req.params.nombreCiudad;

    try {
        const ciudades = await Ciudad.find({ nombre: nombreCiudad }).sort({ nombre: 1 });
        res.status(200).json(ciudades);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todas las ciudades ordenadas alfabéticamente
const obtenerTodasLasCiudades = async (req, res) => {
    try {
        const ciudades = await Ciudad.find().sort({ nombre: 1 });
        res.status(200).json(ciudades);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearCiudad,
    buscarCiudadPorNombre,
    obtenerTodasLasCiudades,
};