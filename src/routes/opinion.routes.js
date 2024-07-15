import express from 'express';
import * as opinionController from '../controllers/opinion.controller.js';

const router = express.Router();

router.post('/', opinionController.create);
router.get('/', opinionController.findAll);
router.get('/:id', opinionController.findOne);
router.put('/:id', opinionController.update);
router.delete('/:id', opinionController.remove);

export default router;
