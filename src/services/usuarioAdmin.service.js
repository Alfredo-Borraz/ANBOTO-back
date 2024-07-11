const UsuarioAdmin = require('../models/usuarioAdmin.model');

const createUser = async (userData) => {
    return await UsuarioAdmin.create(userData);
};

const getUserById = async (id) => {
    return await UsuarioAdmin.findById(id);
};

const getAllUsers = async () => {
    return await UsuarioAdmin.findAll();
};

const updateUser = async (id, userData) => {
    return await UsuarioAdmin.update(id, userData);
};

const deleteUser = async (id) => {
    return await UsuarioAdmin.remove(id);
};

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
};
