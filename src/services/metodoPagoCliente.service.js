import MetodoPagoCliente from '../models/metodoPagoCliente.model.js';

export const createMetodoPagoCliente = async (data) => {
  return await MetodoPagoCliente.create(data);
};

export const findAllMetodoPagoClientes = async () => {
  return await MetodoPagoCliente.findAll();
};

export const findMetodoPagoClienteById = async (id) => {
  return await MetodoPagoCliente.findByPk(id);
};

export const updateMetodoPagoCliente = async (id, data) => {
  return await MetodoPagoCliente.update(data, { where: { id_metodo_pago_cliente: id } });
};

export const deleteMetodoPagoCliente = async (id) => {
  return await MetodoPagoCliente.destroy({ where: { id_metodo_pago_cliente: id } });
};
