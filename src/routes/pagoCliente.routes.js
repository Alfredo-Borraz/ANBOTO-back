import express from 'express';
import * as pagoClienteController from '../controllers/pagoCliente.controller.js';

const router = express.Router();

router.post('/', pagoClienteController.create);
router.get('/', pagoClienteController.findAll);
router.get('/:id', pagoClienteController.findOne);
router.put('/:id', pagoClienteController.update);
router.delete('/:id', pagoClienteController.remove);

export default router;
