import express from 'express';
import * as usuarioClienteController from '../controllers/usuarioCliente.controller.js';

const router = express.Router();

router.post('/', usuarioClienteController.create);
router.get('/', usuarioClienteController.findAll);
router.get('/:id', usuarioClienteController.findOne);
router.put('/:id', usuarioClienteController.update);
router.delete('/:id', usuarioClienteController.remove);

export default router;
