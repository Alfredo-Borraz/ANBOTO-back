import express from 'express';
import * as estadoController from '../controllers/estado.controller.js';

const router = express.Router();

router.post('/', estadoController.create);
router.get('/', estadoController.findAll);
router.get('/:id', estadoController.findOne);
router.put('/:id', estadoController.update);
router.delete('/:id', estadoController.remove);

export default router;
