const mongoose = require('mongoose');
const User = require("../models/User");

exports.createUser = async (req, res) => {
    const { username, animales, email, rol } = req.body;

    // Validación de campos
    if (!username || !animales || !email || !rol ) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    try {
        // Verificar si el email ya está registrado
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({ error: "El email ya está registrado" });
        }

        // Crear instancia del modelo
        const user = new User({ username, animales, email, rol });
        await user.save();
        res.json({ message: "Usuario registrado con éxito", user });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el animal', details: error.message });
    }
};