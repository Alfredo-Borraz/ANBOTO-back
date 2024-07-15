import DatosTienda from '../models/datosTienda.model.js';

export const createDatosTienda = async (data) => {
  return await DatosTienda.create(data);
};

export const findAllDatosTienda = async () => {
  return await DatosTienda.findAll();
};

export const findDatosTiendaById = async (id) => {
  return await DatosTienda.findByPk(id);
};

export const updateDatosTienda = async (id, data) => {
  return await DatosTienda.update(data, { where: { id_tienda: id } });
};

export const deleteDatosTienda = async (id) => {
  return await DatosTienda.destroy({ where: { id_tienda: id } });
};
