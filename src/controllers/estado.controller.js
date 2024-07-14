import * as estadoService from '../services/estado.service.js';

export const create = async (req, res) => {
  try {
    const estado = await estadoService.createEstado(req.body);
    res.status(201).send(estado);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const estados = await estadoService.findAllEstados();
    res.status(200).send(estados);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const estado = await estadoService.findEstadoById(req.params.id);
    if (estado) {
      res.status(200).send(estado);
    } else {
      res.status(404).send({ message: 'Estado not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await estadoService.updateEstado(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Estado updated successfully.' });
    } else {
      res.status(404).send({ message: 'Estado not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await estadoService.deleteEstado(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Estado deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Estado not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
