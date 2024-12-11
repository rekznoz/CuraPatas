const mongoose = require('mongoose');

const animalesSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    estadoSalud: { type: String, required: true },
    duenio: { type: String, required: true },
    fechaRegistro: { type: Date, default: Date.now }
});

const Perrito = mongoose.model('animales', animalesSchema);
