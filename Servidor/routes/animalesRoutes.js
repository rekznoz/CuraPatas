import { Router } from 'express';
const router = Router();
import { crearAnimal, obtenerAnimales, obtenerAnimalesPorNombre } from '../controllers/animalesController.js';

router.post('/', crearAnimal);
router.get('/', obtenerAnimales);
router.get('/a/:nombre', obtenerAnimalesPorNombre);

export default router;