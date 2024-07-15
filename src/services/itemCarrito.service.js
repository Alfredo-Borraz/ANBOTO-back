import ItemCarrito from '../models/itemCarrito.model.js';

export const createItemCarrito = async (data) => {
  return await ItemCarrito.create(data);
};

export const findAllItemCarritos = async () => {
  return await ItemCarrito.findAll();
};

export const findItemCarritoById = async (id) => {
  return await ItemCarrito.findByPk(id);
};

export const updateItemCarrito = async (id, data) => {
  return await ItemCarrito.update(data, { where: { id_item_carrito: id } });
};

export const deleteItemCarrito = async (id) => {
  return await ItemCarrito.destroy({ where: { id_item_carrito: id } });
};
