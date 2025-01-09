const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    animales: { type: Array, required: true },
    email: { type: String, require: true },
    rol: { type: String, require: true }
});

module.exports = mongoose.model('Users', userSchema);
