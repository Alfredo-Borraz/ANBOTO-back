import * as productoService from '../services/producto.service.js';

export const create = async (req, res) => {
  try {
    const producto = await productoService.createProducto(req.body);
    res.status(201).send(producto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const productos = await productoService.findAllProductos();
    res.status(200).send(productos);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findOne = async (req, res) => {
  try {
    const producto = await productoService.findProductoById(req.params.id);
    if (producto) {
      res.status(200).send(producto);
    } else {
      res.status(404).send({ message: 'Producto not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const updated = await productoService.updateProducto(req.params.id, req.body);
    if (updated[0] === 1) {
      res.status(200).send({ message: 'Producto updated successfully.' });
    } else {
      res.status(404).send({ message: 'Producto not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const deleted = await productoService.deleteProducto(req.params.id);
    if (deleted === 1) {
      res.status(200).send({ message: 'Producto deleted successfully.' });
    } else {
      res.status(404).send({ message: 'Producto not found.' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
