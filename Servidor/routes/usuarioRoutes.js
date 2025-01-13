const express = require('express');
const router = express.Router();
const { login, crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario } = require('../controllers/usuarioController');

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.get('/login', login);
router.put('/', editarUsuario);
router.delete('/', eliminarUsuario);


module.exports = router;



