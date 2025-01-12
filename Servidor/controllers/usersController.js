const mongoose = require('mongoose');
const User = require("../models/User");

exports.createUser = async (req, res) => {
    const { username, animales, email, rol } = req.body;

    // Validación de campos
    if (!username || !animales || !email || !rol ) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "El correo electrónico no es válido" });
    }

    // Validar la seguridad de la contraseña
    if (password.length < 8) {
        return res.status(400).json({ error: "La contraseña debe tener al menos 8 caracteres" });
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).json({
            error: "La contraseña debe contener al menos una letra, un número y un carácter especial",
        });
    }

    try {
        // Verificar si el email ya está registrado
        const existingUser = await User.findOne({email});
        if (!existingUser) {
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