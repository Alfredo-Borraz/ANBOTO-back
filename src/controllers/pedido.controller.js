import * as pedidoService from '../services/pedido.service.js';

export const create = async (req, res) => {
  try {
    const pedido = await pedidoService.createPedido(req.body);
    res.status(201).send(pedido);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const pedidos = await pedidoService.findAllPedidos();
    res.status(200).send(pedidos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const pedido = await pedidoService.findPedidoById(req.params.id);
    if (pedido) {
      res.status(200).send(pedido);
    } else {
      res.status(404).send({ message: 'Pedido not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await pedidoService.updatePedido(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Pedido updated successfully.' });
    } else {
      res.status(404).send({ message: 'Pedido not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await pedidoService.deletePedido(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Pedido deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Pedido not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
