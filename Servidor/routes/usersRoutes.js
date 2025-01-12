const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/usersController');

router.post('/', createUser);


module.exports = router;
