const mongoose = require('mongoose');
const Animales = require('../models/Animals'); // Suponiendo que el modelo está en models/Animals.js
 
exports.createAnimal = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, dueño, fechaRegistro } = req.body;

    // Validación de campos
    if (!nombre || !especie || !raza || !edad || !estadoSalud || !dueño || !fechaRegistro) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
        // Crear instancia del modelo
        const animal = new Animales({ nombre, especie, raza, edad, estadoSalud, dueño, fechaRegistro });
        await animal.save();
        res.json({ message: "Animal registrado con éxito", animal });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el animal', details: error.message });
    }
};
