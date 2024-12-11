const mongoose = require('mongoose');
const Animales = require('../models/Animals'); // Suponiendo que el modelo está en models/perrito.js

exports.createAnimal = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro } = req.body;

    if (!nombre, !especie, !raza, !edad, !estadoSalud, !duenio, !fechaRegistro){
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    try {
        const animales = new animales({ nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro });
        await animales.save();
        res.json({ message: "Animal Cargado" })
    } catch (error){
        res.status(500).json({ error: 'Error al agregar el animal' });
    }
}

exports.getAnimales = async(req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const animales = await Animales.find()
            .skip((page - 1) * limit)
            .limit(Number(limit));
        res.json(animales);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los animales' });
    }
}