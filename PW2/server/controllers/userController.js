const User = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const crearUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { nombre, apellido, edad, email, contrasenia } = req.body;

    try {
        // Verificar si el usuario ya existe por su correo electrónico
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'Ya existe un usuario con este correo electrónico' });
        }

        // Validar el formato del correo electrónico
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Formato de correo electrónico inválido' });
        }

         // Validar la longitud de la contraseña
        if (contrasenia.length < 6) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
        }

        // Encriptar la contraseña usando bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);

        const nuevoUsuario = new Usuario({ nombre, apellido, edad, email, contrasenia: hashedPassword });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const loginUsuario = async (req, res) => {
    const { email, contrasenia } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Comparar la contraseña proporcionada con la contraseña almacenada en la base de datos
        const contraseñaValida = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!contraseñaValida) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        res.status(200).json({ mensaje: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const actualizarUsuario = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.params;
    const { nombre, apellido, edad, email, contrasenia } = req.body;

    try {
        // Validar el formato del correo electrónico si se proporciona
        if (email) {
            const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Formato de correo electrónico inválido' });
            }
        }

        // Validar la longitud de la contraseña si se proporciona
        if (contrasenia && contrasenia.length < 6) {
            return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres' });
        }

        const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
        if (!usuarioActualizado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario actualizado correctamente', usuario: usuarioActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerTodosLosUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    crearUsuario,
    loginUsuario,
    actualizarUsuario,
    obtenerTodosLosUsuarios,
};



