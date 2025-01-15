const mongoose = require('mongoose');
const Users = require('../models/Users');
const Bycript = require('bcryptjs')

exports.crearUsuario = async (req, res) => {
    const {username, email, secreto} = req.body;

    // Validación de campos
    if (!username || !email || !secreto) {
        return res.status(400).json({error: 'Todos los campos son requeridos'});
    }
    try {
        // Verificar si el email ya está registrado
        const existeEmail = await Users.findOne({email});
        if (existeEmail) {
            return res.status(400).json({error: "El email ya está registrado"});
        }
        // Verificar si el usuario ya esta registrado
        const existeUsuario = await Users.findOne({username});
        if (existeUsuario) {
            return res.status(400).json({error: "El usuario ya está registrado"});
        }
        const user = new Users({username, email, secreto});
        await user.save();
        res.json({message: "Usuario registrado con éxito", user});
    } catch (error) {
        res.status(500).json({error: 'Error al agregar el usuario', details: error.message});
    }
};

exports.login = async (req, res) => {
    const {email, secreto} = req.body;

    console.log(req.body);

    if (!email || !secreto) {
        return res.status(400).json({error: 'Todos los campos son requeridos'});
    }

    try {
        const usuario = await Users.findOne({email});
        console.log(usuario);
        if (!usuario) {
            return res.status(400).json({error: 'El usuario no existe'});
        }

        const passwordValido = await Bycript.compare(secreto, usuario.secreto);
        if (!passwordValido) {
            return res.status(400).json({error: 'La contraseña es incorrecta'});
        }

        res.json({message: 'Usuario logueado con éxito', usuario});

    } catch (error) {
        res.status(500).json({error: 'Error al loguear el usuario', details: error.message});

    }
}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const {page = 1, limit = 99} = req.query;

        // Convertir valores de paginación a números
        const pageNumber = Math.max(1, parseInt(page, 10));
        const limitNumber = Math.max(1, parseInt(limit, 10));

        const usuarios = await Users.find()
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los animales', details: error.message});
    }
};

exports.editarUsuario = async (req, res) => {
    // Implementar funcionalidad para editar usuarios
}

exports.eliminarUsuario = async (req, res) => {
    const usuario = {username} = req.body;
    // Validación de campos
    if (!username) {
        return res.status(400).json({error: 'El nombre es requerido para eliminar un animal'});
    }

    try {
        // Buscar y eliminar el usuario por nombre
        const nombreUsuario = await Users.find(usuario);
        const {_id} = nombreUsuario[0]
        const UsuarioBorrado = await Users.findByIdAndDelete({_id});

        res.json({message: "Usuario borrado con éxito", UsuarioBorrado});
    } catch (error) {
        res.status(500).json({error: 'Error al borrar el animal', details: error.message});
    }
};

