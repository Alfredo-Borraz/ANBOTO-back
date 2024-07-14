import express from 'express';
import * as planSuscripcionController from '../controllers/planSuscripcion.controller.js';

const router = express.Router();

router.post('/', planSuscripcionController.create);
router.get('/', planSuscripcionController.findAll);
router.get('/:id', planSuscripcionController.findOne);
router.put('/:id', planSuscripcionController.update);
router.delete('/:id', planSuscripcionController.remove);

export default router;
