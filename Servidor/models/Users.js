const mongoose = require('mongoose');

let currentDate = new Date();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, require: true },
    secreto: {type: String, require: true },
    animales: { type: Array, required: false, default: [] },
    rol: { type: String, require: true, default: "usuario" },
    descripcion: { type: String, require: false, default: "" },
    ubicacion: { type: String, require: false, default: "" },
    telefono: { type: String, require: false, default: "" },
    fechaRegistro: { type: String, require: true, default: currentDate.toLocaleDateString() }
     
});

module.exports = mongoose.model('Users', userSchema);
