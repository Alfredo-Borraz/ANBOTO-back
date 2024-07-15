import * as configuracionesReciboService from '../services/configuracionesRecibo.service.js';

export const create = async (req, res) => {
  try {
    const configuracionesRecibo = await configuracionesReciboService.createConfiguracionesRecibo(req.body);
    res.status(201).send(configuracionesRecibo);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const configuracionesRecibos = await configuracionesReciboService.findAllConfiguracionesRecibos();
    res.status(200).send(configuracionesRecibos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const configuracionesRecibo = await configuracionesReciboService.findConfiguracionesReciboById(req.params.id);
    if (configuracionesRecibo) {
      res.status(200).send(configuracionesRecibo);
    } else {
      res.status(404).send({ message: 'Configuraciones Recibo not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await configuracionesReciboService.updateConfiguracionesRecibo(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Configuraciones Recibo updated successfully.' });
    } else {
      res.status(404).send({ message: 'Configuraciones Recibo not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await configuracionesReciboService.deleteConfiguracionesRecibo(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Configuraciones Recibo deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Configuraciones Recibo not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
