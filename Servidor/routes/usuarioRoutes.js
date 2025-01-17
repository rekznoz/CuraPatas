import { Router } from 'express';

import {
  login,
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario
} from '../controllers/usuarioController.js';

const router = Router();

// Crear usuario
router.post('/', crearUsuario);

// Obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Obtener un usuario por username
router.get('/:username', obtenerUsuario);

// Iniciar sesión
router.post('/login', login);

// Editar usuario por ID
router.put('/:id', editarUsuario);

// Eliminar usuario (se recomienda especificar el ID)
router.delete('/:id', eliminarUsuario);

export default router;
