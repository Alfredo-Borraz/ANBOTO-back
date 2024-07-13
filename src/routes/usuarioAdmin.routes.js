import express from 'express';
import * as usuarioAdminController from '../controllers/usuarioAdmin.controller.js';

const router = express.Router();

router.post('/', usuarioAdminController.create);
router.get('/', usuarioAdminController.findAll);
router.get('/:id', usuarioAdminController.findOne);
router.put('/:id', usuarioAdminController.update);
router.delete('/:id', usuarioAdminController.remove);

export default router;


