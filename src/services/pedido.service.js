import Pedido from '../models/pedido.model.js';

export const createPedido = async (data) => {
  return await Pedido.create(data);
};

export const findAllPedidos = async () => {
  return await Pedido.findAll();
};

export const findPedidoById = async (id) => {
  return await Pedido.findByPk(id);
};

export const updatePedido = async (id, data) => {
  return await Pedido.update(data, { where: { id_pedido: id } });
};

export const deletePedido = async (id) => {
  return await Pedido.destroy({ where: { id_pedido: id } });
};
