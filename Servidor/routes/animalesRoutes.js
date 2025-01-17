import { Router } from 'express';
const router = Router();
import { createAnimal } from '../controllers/animalesController.js';

router.post('/', createAnimal);

export default router;