import express from 'express';
import * as carritoCompraController from '../controllers/carritoCompra.controller.js';

const router = express.Router();

router.post('/', carritoCompraController.create);
router.get('/', carritoCompraController.findAll);
router.get('/:id', carritoCompraController.findOne);
router.put('/:id', carritoCompraController.update);
router.delete('/:id', carritoCompraController.remove);

export default router;
