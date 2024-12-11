const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authMiddleware');
const { createAnimal, getAnimales } = require('../controllers/animalesController');

router.post('/', createAnimal);
router.get('/', getAnimales);

module.exports = router;
