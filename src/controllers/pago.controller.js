import * as pagoService from '../services/pago.service.js';

export const create = async (req, res) => {
  try {
    const pago = await pagoService.createPago(req.body);
    res.status(201).send(pago);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const pagos = await pagoService.findAllPagos();
    res.status(200).send(pagos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const pago = await pagoService.findPagoById(req.params.id);
    if (pago) {
      res.status(200).send(pago);
    } else {
      res.status(404).send({ message: 'Pago not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await pagoService.updatePago(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Pago updated successfully.' });
    } else {
      res.status(404).send({ message: 'Pago not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await pagoService.deletePago(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Pago deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Pago not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

