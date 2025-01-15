const express = require('express');
const router = express.Router();
const { login, crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario, obtenerUsuario} = require('../controllers/usuarioController');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/login', login);
router.put('/:id', editarUsuario);
router.delete('/', eliminarUsuario);


module.exports = router;

