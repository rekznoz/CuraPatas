const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importa el módulo CORS
require('dotenv').config();

// Módulos
const connectDB = require("./config/db");

const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());  // Esto permite peticiones de cualquier origen

// Si deseas configurar CORS de manera más específica, puedes pasarle opciones:
app.use(cors({
  origin: 'http://localhost:5173/',  // Asegúrate de poner el puerto donde está tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Configuración de body-parser
app.use(bodyParser.json());

// Conexión a MongoDB
connectDB()

// Rutas
app.use('/usuario', require('./routes/usuarioRoutes'))

// Iniciar el servidor
const PORT = 3000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
