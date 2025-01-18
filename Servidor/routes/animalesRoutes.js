import { Router } from 'express';
const router = Router();
import { editarAnimal, crearAnimal, obtenerAnimales, obtenerAnimalesPorNombre } from '../controllers/animalesController.js';

router.post('/', crearAnimal);
router.get('/', obtenerAnimales);
router.get('/a/:nombre', obtenerAnimalesPorNombre); 
router.put('/:id', editarAnimal); 

export default router;