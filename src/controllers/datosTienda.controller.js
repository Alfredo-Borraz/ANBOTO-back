import * as datosTiendaService from '../services/datosTienda.service.js';

export const create = async (req, res) => {
  try {
    const datosTienda = await datosTiendaService.createDatosTienda(req.body);
    res.status(201).send(datosTienda);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const datosTiendas = await datosTiendaService.findAllDatosTienda();
    res.status(200).send(datosTiendas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const datosTienda = await datosTiendaService.findDatosTiendaById(req.params.id);
    if (datosTienda) {
      res.status(200).send(datosTienda);
    } else {
      res.status(404).send({ message: 'Datos Tienda not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await datosTiendaService.updateDatosTienda(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Datos Tienda updated successfully.' });
    } else {
      res.status(404).send({ message: 'Datos Tienda not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await datosTiendaService.deleteDatosTienda(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Datos Tienda deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Datos Tienda not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
