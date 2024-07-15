import * as opinionService from '../services/opinion.service.js';

export const create = async (req, res) => {
  try {
    const opinion = await opinionService.createOpinion(req.body);
    res.status(201).send(opinion);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const opinions = await opinionService.findAllOpinions();
    res.status(200).send(opinions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const opinion = await opinionService.findOpinionById(req.params.id);
    if (opinion) {
      res.status(200).send(opinion);
    } else {
      res.status(404).send({ message: 'Opinion not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await opinionService.updateOpinion(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Opinion updated successfully.' });
    } else {
      res.status(404).send({ message: 'Opinion not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await opinionService.deleteOpinion(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Opinion deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Opinion not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
