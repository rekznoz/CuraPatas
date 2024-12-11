const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { createAnimal, getAnimales, removeAnimal } = require('../controllers/animalesController');

router.post('/', createAnimal);
router.get('/', getAnimales);
router.delete("/", removeAnimal)

module.exports = router;
