import express from 'express';
import * as metodoPagoAdminController from '../controllers/metodoPagoAdmin.controller.js';

const router = express.Router();

router.post('/', metodoPagoAdminController.create);
router.get('/', metodoPagoAdminController.findAll);
router.get('/:id', metodoPagoAdminController.findOne);
router.put('/:id', metodoPagoAdminController.update);
router.delete('/:id', metodoPagoAdminController.remove);

export default router;
