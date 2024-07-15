import * as metodoPagoClienteService from '../services/metodoPagoCliente.service.js';

export const create = async (req, res) => {
  try {
    const metodoPagoCliente = await metodoPagoClienteService.createMetodoPagoCliente(req.body);
    res.status(201).send(metodoPagoCliente);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const metodosPagoCliente = await metodoPagoClienteService.findAllMetodoPagoClientes();
    res.status(200).send(metodosPagoCliente);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const metodoPagoCliente = await metodoPagoClienteService.findMetodoPagoClienteById(req.params.id);
    if (metodoPagoCliente) {
      res.status(200).send(metodoPagoCliente);
    } else {
      res.status(404).send({ message: 'Método de pago cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await metodoPagoClienteService.updateMetodoPagoCliente(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Método de pago cliente updated successfully.' });
    } else {
      res.status(404).send({ message: 'Método de pago cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await metodoPagoClienteService.deleteMetodoPagoCliente(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Método de pago cliente deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Método de pago cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
