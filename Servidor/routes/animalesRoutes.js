import { Router } from 'express';
const router = Router();
import { crearAnimal, obtenerAnimales } from '../controllers/animalesController.js';

router.post('/', crearAnimal);
router.get('/', obtenerAnimales);
// router.get('/', obtenerAnimalesPorNombre);

export default router;