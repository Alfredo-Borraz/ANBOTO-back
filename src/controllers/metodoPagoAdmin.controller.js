import * as metodoPagoAdminService from '../services/metodoPagoAdmin.service.js';

export const create = async (req, res) => {
  try {
    const metodoPagoAdmin = await metodoPagoAdminService.createMetodoPagoAdmin(req.body);
    res.status(201).send(metodoPagoAdmin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const metodosPagoAdmin = await metodoPagoAdminService.findAllMetodosPagoAdmin();
    res.status(200).send(metodosPagoAdmin);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const metodoPagoAdmin = await metodoPagoAdminService.findMetodoPagoAdminById(req.params.id);
    if (metodoPagoAdmin) {
      res.status(200).send(metodoPagoAdmin);
    } else {
      res.status(404).send({ message: 'Método de pago admin not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await metodoPagoAdminService.updateMetodoPagoAdmin(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Método de pago admin updated successfully.' });
    } else {
      res.status(404).send({ message: 'Método de pago admin not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await metodoPagoAdminService.deleteMetodoPagoAdmin(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Método de pago admin deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Método de pago admin not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
