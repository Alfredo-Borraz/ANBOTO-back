import express from 'express';
import * as datosTiendaController from '../controllers/datosTienda.controller.js';

const router = express.Router();

router.post('/', datosTiendaController.create);
router.get('/', datosTiendaController.findAll);
router.get('/:id', datosTiendaController.findOne);
router.put('/:id', datosTiendaController.update);
router.delete('/:id', datosTiendaController.remove);

export default router;
