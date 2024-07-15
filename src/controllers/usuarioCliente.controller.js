import * as usuarioClienteService from '../services/usuarioCliente.service.js';

export const create = async (req, res) => {
  try {
    const usuarioCliente = await usuarioClienteService.createUsuarioCliente(req.body);
    res.status(201).send(usuarioCliente);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const usuariosClientes = await usuarioClienteService.findAllUsuarioClientes();
    res.status(200).send(usuariosClientes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const usuarioCliente = await usuarioClienteService.findUsuarioClienteById(req.params.id);
    if (usuarioCliente) {
      res.status(200).send(usuarioCliente);
    } else {
      res.status(404).send({ message: 'Usuario Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await usuarioClienteService.updateUsuarioCliente(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Usuario Cliente updated successfully.' });
    } else {
      res.status(404).send({ message: 'Usuario Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await usuarioClienteService.deleteUsuarioCliente(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Usuario Cliente deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Usuario Cliente not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
