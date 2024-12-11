const mongoose = require('mongoose');
const Animales = require('../models/Animals'); // Suponiendo que el modelo está en models/Animals.js

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

exports.createAnimal = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro } = req.body;

    // Validación de campos
    if (!nombre || !especie || !raza || !edad || !estadoSalud || !duenio || !fechaRegistro) {
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

exports.removeAnimal = async (req, res) => {
    const { id } = req.body;

    // Validación de campos
    if (!id) {
        return res.status(400).json({ error: 'El nombre es requerido para eliminar un animal' });
    }

    try {
        // Buscar y eliminar el animal por nombre
        const animal = await Animales.findByIdAndDelete(id);

        if (!animal) {
            return res.status(404).json({ error: 'Animal no encontrado' });
        }

        res.json({ message: "Animal borrado con éxito", animal });
    } catch (error) {
        res.status(500).json({ error: 'Error al borrar el animal', details: error.message });
    }
};

exports.updateAnimal = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro } = req.body;

    // Validación de campos
    if (!nombre || !especie || !raza || !edad || !estadoSalud || !duenio || !fechaRegistro) {
        return res.status(400).json({ error: 'Todos los campos son requeridos para actualizar un animal' });
    }

    try {
        // Buscar y actualizar el animal por nombre
        const animal = await Animales.findOneAndUpdate(
            { nombre },
            { especie, raza, edad, estadoSalud, duenio, fechaRegistro },
            { new: true } // Retorna el documento actualizado
        );

        if (!animal) {
            return res.status(404).json({ error: 'Animal no encontrado' });
        }

        res.json({ message: "Animal actualizado con éxito", animal });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el animal', details: error.message });
    }
};