import MetodoPagoAdmin from '../models/metodoPagoAdmin.model.js';

export const createMetodoPagoAdmin = async (data) => {
  return await MetodoPagoAdmin.create(data);
};

export const findAllMetodosPagoAdmin = async () => {
  return await MetodoPagoAdmin.findAll();
};

export const findMetodoPagoAdminById = async (id) => {
  return await MetodoPagoAdmin.findByPk(id);
};

export const updateMetodoPagoAdmin = async (id, data) => {
  return await MetodoPagoAdmin.update(data, { where: { id_metodo_pago_admin: id } });
};

export const deleteMetodoPagoAdmin = async (id) => {
  return await MetodoPagoAdmin.destroy({ where: { id_metodo_pago_admin: id } });
};
