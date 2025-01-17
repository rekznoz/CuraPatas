import mongoose from 'mongoose';
import Users from '../models/Users.js';
import bcrypt from 'bcryptjs';  // Corregir el nombre del paquete bcrypt

export const crearUsuario = async (req, res) => {
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

        // Verificar si el usuario ya está registrado
        const existeUsuario = await Users.findOne({username});
        if (existeUsuario) {
            return res.status(400).json({error: "El usuario ya está registrado"});
        }

        // Cifrar la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(secreto, 10);

        const user = new Users({username, email, secreto: hashedPassword});
        await user.save();
        res.json({message: "Usuario registrado con éxito", user});

    } catch (error) {
        res.status(500).json({error: 'Error al agregar el usuario', details: error.message});
    }
};

export const login = async (req, res) => {
    const {email, secreto} = req.body;

    if (!email || !secreto) {
        return res.status(400).json({error: 'Todos los campos son requeridos'});
    }

    try {
        const usuario = await Users.findOne({email});

        if (!usuario) {
            return res.status(400).json({error: 'El usuario no existe'});
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        const esValida = await bcrypt.compare(secreto, usuario.secreto);
        if (!esValida) {
            return res.status(400).json({error: 'La contraseña es incorrecta'});
        }

        res.json({message: 'Usuario logueado con éxito', usuario});

    } catch (error) {
        res.status(500).json({error: 'Error al loguear el usuario', details: error.message});
    }
};

export const obtenerUsuarios = async (req, res) => {
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
        res.status(500).json({error: 'Error al obtener los usuarios', details: error.message});
    }
};

export const obtenerUsuario = async (req, res) => {
    const {username} = req.params;

    if (!username) {
        return res.status(400).json({error: 'El nombre de usuario es requerido para buscar un usuario'});
    }

    try {
        // Buscar el usuario por nombre
        const nombreUsuario = await Users.find({username});
        res.json(nombreUsuario);
    } catch (error) {
        res.status(500).json({error: 'Error al buscar el usuario', details: error.message});
    }
};

export const editarUsuario = async (req, res) => {
    const {id} = req.params;

    if (!id) {
        return res.status(400).json({error: 'El ID es requerido para editar un usuario'});
    }

    try {
        // Buscar y actualizar el usuario por ID
        const usuarioActualizado = await Users.findByIdAndUpdate(id, req.body, {new: true});
        res.json({message: "Usuario actualizado con éxito", usuarioActualizado});
    } catch (error) {
        res.status(500).json({error: 'Error al editar el usuario', details: error.message});
    }
};

export const eliminarUsuario = async (req, res) => {
    const {username} = req.body;  // Corregir la asignación

    if (!username) {
        return res.status(400).json({error: 'El nombre de usuario es requerido para eliminar un usuario'});
    }

    try {
        // Buscar y eliminar el usuario por nombre
        const nombreUsuario = await Users.find({username});
        if (!nombreUsuario.length) {
            return res.status(400).json({error: 'El usuario no existe'});
        }
        
        const {_id} = nombreUsuario[0];
        const UsuarioBorrado = await Users.findByIdAndDelete(_id);

        res.json({message: "Usuario borrado con éxito", UsuarioBorrado});
    } catch (error) {
        res.status(500).json({error: 'Error al borrar el usuario', details: error.message});
    }
};
