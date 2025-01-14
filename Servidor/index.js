const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

// Módulos
const connectDB = require("./config/db");

const app = express();
app.use(bodyParser.json());

// Conexión a MongoDB
connectDB()

app.use('/usuario', require('./routes/usuarioRoutes'))

// Iniciar el servidor
const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// app.post("/perritos", async (req, res) => {
//   try {
//     const { nombre, raza, edad, estadoSalud, duenio } = req.body;

//     if (!nombre || !raza || !edad || !estadoSalud || !duenio) {
//       return res
//         .status(400)
//         .json({ error: "Todos los campos son obligatorios" });
//     }

//     const nuevoPerrito = new Perrito({
//       nombre,
//       raza,
//       edad,
//       estadoSalud,
//       duenio,
//     });
//     await nuevoPerrito.save();

//     res
//       .status(201)
//       .json({ message: "Perrito registrado con éxito", perrito: nuevoPerrito });
//   } catch (err) {
//     res.status(500).json({ error: "Error al registrar el perrito" });
//   }
// });

// // Ruta para listar todos los perritos
// app.get("/perritos", async (req, res) => {
//   try {
//     const perritos = await Perrito.find();
//     res.status(200).json(perritos);
//   } catch (err) {
//     res.status(500).json({ error: "Error al obtener la lista de perritos" });
//   }
// });

