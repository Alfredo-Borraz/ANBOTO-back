import * as usuarioAdminService from '../services/usuarioAdmin.service.js';

export const create = async (req, res) => {
  try {
    const usuarioAdmin = await usuarioAdminService.createUsuarioAdmin(req.body);
    res.status(201).json(usuarioAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const usuariosAdmin = await usuarioAdminService.findAllUsuariosAdmin();
    res.status(200).json(usuariosAdmin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const usuarioAdmin = await usuarioAdminService.findUsuarioAdminById(req.params.id);
    if (usuarioAdmin) {
      res.status(200).json(usuarioAdmin);
    } else {
      res.status(404).json({ message: 'Usuario Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await usuarioAdminService.updateUsuarioAdmin(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).json({ message: 'Usuario Admin updated successfully' });
    } else {
      res.status(404).json({ message: 'Usuario Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await usuarioAdminService.deleteUsuarioAdmin(req.params.id);
    if (deleted === 1) {
      res.status(200).json({ message: 'Usuario Admin deleted successfully' });
    } else {
      res.status(404).json({ message: 'Usuario Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//enpoint login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await usuarioAdminService.findUsuarioAdminByEmail(email);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificación de contraseña en texto plano
    if (usuario.password !== password) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Autenticación exitosa', usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};