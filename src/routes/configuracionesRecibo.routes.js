import express from 'express';
import * as configuracionesReciboController from '../controllers/configuracionesRecibo.controller.js';

const router = express.Router();

router.post('/', configuracionesReciboController.create);
router.get('/', configuracionesReciboController.findAll);
router.get('/:id', configuracionesReciboController.findOne);
router.put('/:id', configuracionesReciboController.update);
router.delete('/:id', configuracionesReciboController.remove);

export default router;
