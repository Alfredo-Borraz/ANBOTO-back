import UsuarioAdmin from '../models/usuarioAdmin.model.js';

export const createUsuarioAdmin = async (data) => {
  return await UsuarioAdmin.create(data);
};

export const findAllUsuariosAdmin = async () => {
  return await UsuarioAdmin.findAll();
};

export const findUsuarioAdminById = async (id) => {
  return await UsuarioAdmin.findByPk(id);
};

export const updateUsuarioAdmin = async (id, data) => {
  return await UsuarioAdmin.update(data, { where: { id_usuario_admin: id } });
};

export const deleteUsuarioAdmin = async (id) => {
  return await UsuarioAdmin.destroy({ where: { id_usuario_admin: id } });
};

//enpoint login

export const findUsuarioAdminByEmail = async (email) => {
  return await UsuarioAdmin.findOne({ where: { email } });
};

