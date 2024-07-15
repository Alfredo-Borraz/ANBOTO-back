import CarritoCompra from '../models/carritoCompra.model.js';

export const createCarritoCompra = async (data) => {
  return await CarritoCompra.create(data);
};

export const findAllCarritoCompras = async () => {
  return await CarritoCompra.findAll();
};

export const findCarritoCompraById = async (id) => {
  return await CarritoCompra.findByPk(id);
};

export const updateCarritoCompra = async (id, data) => {
  return await CarritoCompra.update(data, { where: { id_carrito: id } });
};

export const deleteCarritoCompra = async (id) => {
  return await CarritoCompra.destroy({ where: { id_carrito: id } });
};
