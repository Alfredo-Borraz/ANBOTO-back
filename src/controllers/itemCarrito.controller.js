import * as itemCarritoService from '../services/itemCarrito.service.js';

export const create = async (req, res) => {
  try {
    const item = await itemCarritoService.createItemCarrito(req.body);
    res.status(201).send(item);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const items = await itemCarritoService.findAllItemCarritos();
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const item = await itemCarritoService.findItemCarritoById(req.params.id);
    if (item) {
      res.status(200).send(item);
    } else {
      res.status(404).send({ message: 'Item Carrito not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await itemCarritoService.updateItemCarrito(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Item Carrito updated successfully.' });
    } else {
      res.status(404).send({ message: 'Item Carrito not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await itemCarritoService.deleteItemCarrito(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Item Carrito deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Item Carrito not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
