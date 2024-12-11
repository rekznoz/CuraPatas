const mongoose = require('mongoose');
const Animales = require('../models/Animals'); // Suponiendo que el modelo está en models/Animals.js

exports.createAnimal = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro } = req.body;

    // Validación de campos
    if (!nombre ) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    try {
        // Crear instancia del modelo
        const animal = new Animales({ nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro });
        await animal.save();
        res.json({ message: "Animal registrado con éxito", animal });
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el animal', details: error.message });
    }
};

exports.getAnimales = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        // Convertir valores de paginación a números
        const pageNumber = Math.max(1, parseInt(page, 10));
        const limitNumber = Math.max(1, parseInt(limit, 10));

        const animales = await Animales.find()
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        res.json(animales);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los animales', details: error.message });
    }
};