const express = require('express');
const usuarioAdminController = require('../controllers/usuarioAdmin.controller');

const router = express.Router();

router.post('/', usuarioAdminController.createUser);
router.get('/:id', usuarioAdminController.getUserById);
router.get('/', usuarioAdminController.getAllUsers);
router.put('/:id', usuarioAdminController.updateUser);
router.delete('/:id', usuarioAdminController.deleteUser);

module.exports = router;
