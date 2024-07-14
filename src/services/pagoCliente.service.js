import PagoCliente from '../models/pagoCliente.model.js';

export const createPagoCliente = async (data) => {
  return await PagoCliente.create(data);
};

export const findAllPagoClientes = async () => {
  return await PagoCliente.findAll();
};

export const findPagoClienteById = async (id) => {
  return await PagoCliente.findByPk(id);
};

export const updatePagoCliente = async (id, data) => {
  return await PagoCliente.update(data, { where: { id_pago_cliente: id } });
};

export const deletePagoCliente = async (id) => {
  return await PagoCliente.destroy({ where: { id_pago_cliente: id } });
};
