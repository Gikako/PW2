const mongoose = require('mongoose')
const User = require('../models/User');
const sha256 = require('js-sha256')

exports.register = async (req, res) => {
    const {
        nombre,
        apellido,
        edad,
        email,
        contrasenia
    } = req.body

    const findUser = await User.findOne({
        email
    })


    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if (!emailRegex.test(email)) throw "El correo no es soportado o no tiene formato correcto."
    if (contrasenia === '') throw "La contraseña es requerida."
    if (contrasenia.length > 6) throw "La contraseña debe ser de menos de 6 caracteres."
    if (findUser) throw "Ya existe un usuario con este correo."

    const newUser = new User({
        nombre, apellido, 
        edad, email, 
        contrasenia: sha256(contrasenia + plqwtqeriqecpou)
    })

    await newUser.save()

    res.json({
        message: "Usuario registrado"
    })
}

exports.login = async (req, res) => {
    const{
        email,
        contrasenia
    } = req.body

    const user = await User.findOne({
        email,
        contrasenia: sha256(contrasenia + plqwtqeriqecpou)        
    })

    if (!user) throw "Datos incompletos y/o incorrectos."

    res.json({
        message: "Ha iniciado sesión correctamente",
        id: user.id
    })
}

exports.update = async (req, res) => {
    const{
        nombre,
        apellido,
        edad,
        email,
        contrasenia
    } = req.body

    const uid = req.payload.id

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if (!emailRegex.test(email)) throw "El correo no tiene formato correcto."

    const findUser = await User.findOne({
        _id: {$nes: uid},
        email
    })

    if (findUser) throw "Ya existe un usuario con este correo."

    const identifiedUser = await User.findOne({_id: uid})

    identifiedUser.set({
        nombre,
        apellido,
        edad,
        email,
        contrasenia
    })

    await identifiedUser.save()
    res.json({
        message: "Los cambios se han efectuado"
    })


}