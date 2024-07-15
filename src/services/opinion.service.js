import Opinion from '../models/opinion.model.js';

export const createOpinion = async (data) => {
  return await Opinion.create(data);
};

export const findAllOpinions = async () => {
  return await Opinion.findAll();
};

export const findOpinionById = async (id) => {
  return await Opinion.findByPk(id);
};

export const updateOpinion = async (id, data) => {
  return await Opinion.update(data, { where: { id_opinion: id } });
};

export const deleteOpinion = async (id) => {
  return await Opinion.destroy({ where: { id_opinion: id } });
};
