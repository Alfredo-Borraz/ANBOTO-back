import express from 'express';
import * as pagoController from '../controllers/pago.controller.js';

const router = express.Router();

router.post('/', pagoController.create);
router.get('/', pagoController.findAll);
router.get('/:id', pagoController.findOne);
router.put('/:id', pagoController.update);
router.delete('/:id', pagoController.remove);

export default router;
