const mongoose = require('mongoose');
const Perrito = require('./models/perrito'); // Suponiendo que el modelo está en models/perrito.js

mongoose.connect('mongodb://localhost/curaPatas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conectado a MongoDB");

    // Crear un perrito
    const nuevoPerrito = new Perrito({
        nombre: "Firulais",
        raza: "Golden Retriever",
        edad: 3,
        estadoSalud: "Sano",
        duenio: "Juan Pérez"
    });

    // Guardar en la base de datos
    nuevoPerrito.save()
        .then(() => console.log("Perrito registrado con éxito"))
        .catch(err => console.error("Error al registrar el perrito:", err))
        .finally(() => mongoose.connection.close());
}).catch(err => console.error("Error al conectar a MongoDB:", err));
