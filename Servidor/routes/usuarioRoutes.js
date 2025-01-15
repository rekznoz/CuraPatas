const express = require('express');
const router = express.Router();
const { login, crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario } = require('../controllers/usuarioController');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.post('/login', login);
router.put('/:id', editarUsuario);
router.delete('/', eliminarUsuario);


module.exports = router;

