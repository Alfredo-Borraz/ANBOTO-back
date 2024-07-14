import * as planSuscripcionService from '../services/planSuscripcion.service.js';

export const create = async (req, res) => {
  try {
    const plan = await planSuscripcionService.createPlanSuscripcion(req.body);
    res.status(201).send(plan);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const planes = await planSuscripcionService.findAllPlanesSuscripcion();
    res.status(200).send(planes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const plan = await planSuscripcionService.findPlanSuscripcionById(req.params.id);
    if (plan) {
      res.status(200).send(plan);
    } else {
      res.status(404).send({ message: 'Plan de suscripción not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await planSuscripcionService.updatePlanSuscripcion(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Plan de suscripción updated successfully.' });
    } else {
      res.status(404).send({ message: 'Plan de suscripción not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await planSuscripcionService.deletePlanSuscripcion(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Plan de suscripción deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Plan de suscripción not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
