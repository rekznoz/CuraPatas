const express = require('express');
const router = express.Router();
const { register, login, CrearUsuario, getUsuarios } = require('../controllers/usuarioController');

router.post('/', CrearUsuario);
router.get('/', getUsuarios);
router.get('/login', login);


module.exports = router;



