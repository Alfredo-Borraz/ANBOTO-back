import DatosTienda from '../models/datosTienda.model.js';

export const createDatosTienda = async (fk_usuario, data) => {
  return await DatosTienda.create({ ...data, fk_usuario });
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

export const findDatosTiendaByUser = async (idUsuario) => {
  return await DatosTienda.findOne({ where: { fk_usuario: idUsuario } });
};
