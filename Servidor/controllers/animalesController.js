import Animales from "../models/Animales.js";

export const crearAnimal = async (req, res) => {
  const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro } =
    req.body;

  // Validación de campos
  if (
    !nombre ||
    !especie ||
    !raza ||
    !edad ||
    !estadoSalud ||
    !duenio ||
    !fechaRegistro
  ) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  try {
    // Crear instancia del modelo
    const animal = new Animales({
      nombre,
      especie,
      raza,
      edad,
      estadoSalud,
      duenio,
      fechaRegistro,
    });
    await animal.save();
    res.json({ message: "Animal registrado con éxito", animal });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al agregar el animal", details: error.message });
  }
};

export const obtenerAnimales = async (req, res) => {
    const { nombre, especie, raza, edad, estadoSalud, duenio, fechaRegistro, page = 1, limit = 99 } = req.query;
  
    const filter = [
      { key: 'nombre', value: nombre },
      { key: 'especie', value: especie },
      { key: 'raza', value: raza },
      { key: 'edad', value: edad ? Number(edad) : null },
      { key: 'estadoSalud', value: estadoSalud },
      { key: 'duenio', value: duenio },
      { key: 'fechaRegistro', value: fechaRegistro ? { $gte: new Date(fechaRegistro) } : null }
    ].reduce((acc, { key, value }) => {
      if (value !== undefined && value !== null) {
        acc[key] = typeof value === 'string' ? { $regex: value, $options: 'i' } : value;
      }
      return acc;
    }, {});
  
    try {
      const pageNumber = Math.max(1, parseInt(page, 10));
      const limitNumber = Math.max(1, parseInt(limit, 10));
      const [animales, total] = await Promise.all([
        Animales.find(filter).skip((pageNumber - 1) * limitNumber).limit(limitNumber),
        Animales.countDocuments(filter)
      ]);
  
      res.json({ total, page: pageNumber, limit: limitNumber, data: animales });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los animales', details: error.message });
    }
  };
  
