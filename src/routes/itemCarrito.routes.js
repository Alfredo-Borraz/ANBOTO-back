import express from 'express';
import * as itemCarritoController from '../controllers/itemCarrito.controller.js';

const router = express.Router();

router.post('/', itemCarritoController.create);
router.get('/', itemCarritoController.findAll);
router.get('/:id', itemCarritoController.findOne);
router.put('/:id', itemCarritoController.update);
router.delete('/:id', itemCarritoController.remove);

export default router;
