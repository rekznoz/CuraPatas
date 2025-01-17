import { Schema, model } from 'mongoose';
const currentDate = new Date(); // Definición correcta de currentDate

const animalesSchema = new Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: false, default: "" },
    raza: { type: String, required: true },
    edad: { type: Number, required: true },
    estadoSalud: { type: String, required: true },
    duenio: { type: String, required: true },
    fechaRegistro: { type: String, 
        required: true, 
        default: () => currentDate.toLocaleDateString() }
});

export default model('Animales', animalesSchema);