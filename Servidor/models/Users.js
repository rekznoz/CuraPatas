const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, require: true },
    contraseña: {type: String, require: true },
    animales: { type: Array, required: false },
    rol: { type: String, require: true },
    descripcion: { type: String, require: false },
    ubicacion: { type: String, require: false },
    telefono: { type: String, require: false },
    fechaRegistro: { type: String, require: true }
     
});

module.exports = mongoose.model('Users', userSchema);
