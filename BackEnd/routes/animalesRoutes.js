const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { createAnimal, getAnimales, removeAnimal, updateAnimal } = require('../controllers/animalesController');

router.post('/', createAnimal);
router.get('/', getAnimales);
router.delete("/", removeAnimal)
router.put("/", updateAnimal)

module.exports = router;
