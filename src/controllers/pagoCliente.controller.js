import * as pagoClienteService from '../services/pagoCliente.service.js';

export const create = async (req, res) => {
  try {
    const pagoCliente = await pagoClienteService.createPagoCliente(req.body);
    res.status(201).send(pagoCliente);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const pagosClientes = await pagoClienteService.findAllPagoClientes();
    res.status(200).send(pagosClientes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const pagoCliente = await pagoClienteService.findPagoClienteById(req.params.id);
    if (pagoCliente) {
      res.status(200).send(pagoCliente);
    } else {
      res.status(404).send({ message: 'Pago Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await pagoClienteService.updatePagoCliente(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Pago Cliente updated successfully.' });
    } else {
      res.status(404).send({ message: 'Pago Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await pagoClienteService.deletePagoCliente(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Pago Cliente deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Pago Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
