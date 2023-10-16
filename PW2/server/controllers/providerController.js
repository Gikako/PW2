const Proveedor = require('./models/Provider');
const { validationResult } = require('express-validator');

// Controlador para crear un nuevo proveedor
const crearProveedor = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, tipo } = req.body;

    try {
        // Verificar si el proveedor ya existe
        const proveedorExistente = await Proveedor.findOne({ nombre });
        if (proveedorExistente) {
            return res.status(400).json({ error: 'El proveedor ya existe' });
        }

        // Crear un nuevo proveedor
        const nuevoProveedor = new Proveedor({ nombre, tipo });
        await nuevoProveedor.save();
        res.status(201).json({ mensaje: 'Proveedor creado correctamente', proveedor: nuevoProveedor });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener todos los proveedores
const obtenerTodosProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find().sort({ nombre: 1 });
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener proveedores por orden alfabético
const obtenerProveedoresPorOrdenAlfabetico = async (req, res) => {
    try {
        const proveedores = await Proveedor.find().sort({ nombre: 1 });
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Controlador para obtener proveedores por tipo y orden alfabético de nombre
const obtenerProveedoresPorTipoYOrdenAlfabetico = async (req, res) => {
    const tipo = req.params.tipo;

    try {
        const proveedores = await Proveedor.find({ tipo }).sort({ nombre: 1 });
        res.status(200).json(proveedores);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearProveedor,
    obtenerTodosProveedores,
    obtenerProveedoresPorOrdenAlfabetico,
    obtenerProveedoresPorTipoYOrdenAlfabetico,
};