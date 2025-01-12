const mongoose = require('mongoose');
const User = require("../models/Users");
const Users = require('../models/Users');

exports.CrearUsuario = async (req, res) => {
    const { username, animales, email, rol } = req.body;
    
    // Validación de campos
    if (!username || !animales || !email || !rol ) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    
    try {
        // Crear instancia del modelo
        const user = new Users({ username, animales, email, rol });
        await user.save();
        res.json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el animal', details: error.message });
    }
};
exports.login = async (req, res) => {
    const { username, animales, email, rol } = req.body;
    // Implementar validación aquí
    
}
exports.getUsuarios = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        // Convertir valores de paginación a números
        const pageNumber = Math.max(1, parseInt(page, 10));
        const limitNumber = Math.max(1, parseInt(limit, 10));

        const usuarios = await Users.find()
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los animales', details: error.message });
    }
};