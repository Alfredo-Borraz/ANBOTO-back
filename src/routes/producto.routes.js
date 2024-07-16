import express from 'express';
import * as productoController from '../controllers/producto.controller.js';

const router = express.Router();

router.post('/', productoController.create);
router.get('/', productoController.findAll);
router.get('/:id', productoController.findOne);
router.put('/:id', productoController.update);
router.delete('/:id', productoController.remove);

export default router;
