import express from 'express';
import * as metodoPagoClienteController from '../controllers/metodoPagoCliente.controller.js';

const router = express.Router();

router.post('/', metodoPagoClienteController.create);
router.get('/', metodoPagoClienteController.findAll);
router.get('/:id', metodoPagoClienteController.findOne);
router.put('/:id', metodoPagoClienteController.update);
router.delete('/:id', metodoPagoClienteController.remove);

export default router;
