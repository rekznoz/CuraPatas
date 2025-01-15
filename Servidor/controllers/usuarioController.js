const mongoose = require('mongoose');
const Users = require('../models/Users');
const Bycript = require('bcryptjs')

exports.crearUsuario = async (req, res) => {
    const {username, email, contraseña} = req.body;

    // Validación de campos
    if (!username || !email || !contraseña) {
        return res.status(400).json({error: 'Todos los campos son requeridos'});
    }
    try {
        // Verificar si el email ya está registrado
        const existeEmail = await Users.findOne({email});
        if (existeEmail) {
            return res.status(400).json({ error: "El email ya está registrado" });
        }
        // Verificar si el usuario ya esta registrado
         const existeUsuario = await Users.findOne({username});
         if (existeUsuario) {
             return res.status(400).json({ error: "El usuario ya está registrado" });
         }
         const user = new Users({ username, email, contraseña });
        await user.save();
        res.json({message: "Usuario registrado con éxito", user});
    } catch (error) {
        res.status(500).json({error: 'Error al agregar el usuario', details: error.message});
    }
};

exports.login = async (req, res) => {
    const {username, animales, email, rol} = req.body;
    // Implementar validación aquí

    if (!username || !email || !contraseña) {
        return res.status(400).json({error: 'Todos los campos son requeridos'});
    }

    try {
        const existeUsuario = await Users.findOne({username});
        if (!existeUsuario) {
            return res.status(400).json({error: 'Usuario no encontrado'});
        }

        const contraseñaValida = await Bycript.compare(contraseña, existeUsuario.contraseña);
        if (!contraseñaValida) {
            return res.status(400).json({error: 'Contraseña incorrecta'});
        }

        res.json({message: 'Inicio de sesión exitoso', existeUsuario});

    } catch (error) {
        res.status(500).json({error: 'Error al iniciar sesión', details: error.message});
    }

}

exports.obtenerUsuarios = async (req, res) => {
    try {
        const {page = 1, limit = 10} = req.query;

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

