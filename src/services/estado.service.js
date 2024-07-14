import Estado from '../models/estado.model.js';

export const createEstado = async (data) => {
  return await Estado.create(data);
};

export const findAllEstados = async () => {
  return await Estado.findAll();
};

export const findEstadoById = async (id) => {
  return await Estado.findByPk(id);
};

export const updateEstado = async (id, data) => {
  return await Estado.update(data, { where: { id_estado: id } });
};

export const deleteEstado = async (id) => {
  return await Estado.destroy({ where: { id_estado: id } });
};
