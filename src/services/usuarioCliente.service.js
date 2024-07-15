import UsuarioCliente from '../models/usuarioCliente.model.js';

export const createUsuarioCliente = async (data) => {
  return await UsuarioCliente.create(data);
};

export const findAllUsuarioClientes = async () => {
  return await UsuarioCliente.findAll();
};

export const findUsuarioClienteById = async (id) => {
  return await UsuarioCliente.findByPk(id);
};

export const updateUsuarioCliente = async (id, data) => {
  return await UsuarioCliente.update(data, { where: { id_usuario_cliente: id } });
};

export const deleteUsuarioCliente = async (id) => {
  return await UsuarioCliente.destroy({ where: { id_usuario_cliente: id } });
};
