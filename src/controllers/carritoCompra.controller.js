import * as carritoCompraService from '../services/carritoCompra.service.js';

export const create = async (req, res) => {
  try {
    const carrito = await carritoCompraService.createCarritoCompra(req.body);
    res.status(201).send(carrito);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const carritos = await carritoCompraService.findAllCarritoCompras();
    res.status(200).send(carritos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const carrito = await carritoCompraService.findCarritoCompraById(req.params.id);
    if (carrito) {
      res.status(200).send(carrito);
    } else {
      res.status(404).send({ message: 'Carrito de compra not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await carritoCompraService.updateCarritoCompra(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Carrito de compra updated successfully.' });
    } else {
      res.status(404).send({ message: 'Carrito de compra not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await carritoCompraService.deleteCarritoCompra(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Carrito de compra deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Carrito de compra not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
