const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/usuarioController');

router.post('/', createUser);


module.exports = router;
