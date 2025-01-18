import { Router } from 'express';

import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  editarUsuario,
  eliminarUsuario,
  inicioSesion
} from '../controllers/usuarioController.js';

const router = Router();

// Crear usuario
router.post('/', crearUsuario);

// Obtener todos los usuarios
// router.get('/', obtenerUsuarios);

// Obtener un usuario por username
router.get('/:nombreUsuario', obtenerUsuario);

// Iniciar sesión
router.post('/login', inicioSesion);

// Editar usuario por ID
router.put('/:id', editarUsuario);

// Eliminar usuario (se recomienda especificar el ID)
router.delete('/', eliminarUsuario);

export default router;
