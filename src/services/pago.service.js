import Pago from '../models/pago.model.js';

export const createPago = async (data) => {
  return await Pago.create(data);
};

export const findAllPagos = async () => {
  return await Pago.findAll();
};

export const findPagoById = async (id) => {
  return await Pago.findByPk(id);
};

export const updatePago = async (id, data) => {
  return await Pago.update(data, { where: { id_pago: id } });
};

export const deletePago = async (id) => {
  return await Pago.destroy({ where: { id_pago: id } });
};
