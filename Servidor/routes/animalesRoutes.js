const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { createAnimal, getAnimales, removeAnimal, updateAnimal } = require('../controllers/animalesController');

router.post('/', createAnimal);


module.exports = router;
