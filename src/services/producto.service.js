import Producto from '../models/producto.model.js';

export const createProducto = async (data) => {
  return await Producto.create(data);
};

export const findAllProductos = async () => {
  return await Producto.findAll();
};

export const findProductoById = async (id) => {
  return await Producto.findByPk(id);
};

export const updateProducto = async (id, data) => {
  return await Producto.update(data, { where: { id_producto: id } });
};

export const deleteProducto = async (id) => {
  return await Producto.destroy({ where: { id_producto: id } });
};
