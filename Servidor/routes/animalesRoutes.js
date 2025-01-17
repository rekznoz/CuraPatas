import { Router } from 'express';
const router = Router();
import { createAnimal, obtenerAnimales } from '../controllers/animalesController.js';

router.post('/', createAnimal);
router.get('/', obtenerAnimales);

export default router;