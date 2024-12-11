const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose
  .connect(
    "mongodb+srv://natiworlds:nati.worlds_16@cluster0.rm9vp.mongodb.net/curaPatas?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

// Define el esquema y modelo de Mongoose
const perritoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  raza: { type: String, required: true },
  edad: { type: Number, required: true },
  estadoSalud: { type: String, required: true },
  duenio: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
});

const Perrito = mongoose.model("animales", perritoSchema);

// Ruta para agregar un perrito
app.post("/perritos", async (req, res) => {
  try {
    const { nombre, raza, edad, estadoSalud, duenio } = req.body;

    if (!nombre || !raza || !edad || !estadoSalud || !duenio) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const nuevoPerrito = new Perrito({
      nombre,
      raza,
      edad,
      estadoSalud,
      duenio,
    });
    await nuevoPerrito.save();

    res
      .status(201)
      .json({ message: "Perrito registrado con éxito", perrito: nuevoPerrito });
  } catch (err) {
    res.status(500).json({ error: "Error al registrar el perrito" });
  }
});

// Ruta para listar todos los perritos
app.get("/perritos", async (req, res) => {
  try {
    const perritos = await Perrito.find();
    res.status(200).json(perritos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener la lista de perritos" });
  }
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
