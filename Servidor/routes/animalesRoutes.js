import { Router } from 'express';
const router = Router();
import { editarAnimal, crearAnimal, obtenerAnimales, obtenerAnimalesPorNombre, eliminarAnimal, obtenerAnimal } from '../controllers/animalesController.js';

router.post('/', crearAnimal);
router.get('/', obtenerAnimales);
router.get('/:id', obtenerAnimal);
router.get('/a/:nombre', obtenerAnimalesPorNombre); 
router.put('/:id', editarAnimal); 
router.delete('/', eliminarAnimal); 

export default router;