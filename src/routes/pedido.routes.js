import express from 'express';
import * as pedidoController from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', pedidoController.create);
router.get('/', pedidoController.findAll);
router.get('/:id', pedidoController.findOne);
router.put('/:id', pedidoController.update);
router.delete('/:id', pedidoController.remove);

export default router;
