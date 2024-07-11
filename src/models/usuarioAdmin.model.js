const connection = require('../config/db');

const UsuarioAdmin = {
    create: async (newUser) => {
        const [result] = await connection.promise().query('INSERT INTO usuario_admin SET ?', newUser);
        return { id: result.insertId, ...newUser };
    },

    findById: async (id) => {
        const [rows] = await connection.promise().query('SELECT * FROM usuario_admin WHERE id_usuario = ?', [id]);
        return rows[0];
    },

    findAll: async () => {
        const [rows] = await connection.promise().query('SELECT * FROM usuario_admin');
        return rows;
    },

    update: async (id, updatedUser) => {
        await connection.promise().query('UPDATE usuario_admin SET ? WHERE id_usuario = ?', [updatedUser, id]);
        return { id, ...updatedUser };
    },

    remove: async (id) => {
        await connection.promise().query('DELETE FROM usuario_admin WHERE id_usuario = ?', [id]);
        return { message: 'Usuario eliminado exitosamente' };
    }
};

module.exports = UsuarioAdmin;
