import ConfiguracionesRecibo from '../models/configuracionesRecibo.model.js';

export const createConfiguracionesRecibo = async (data) => {
  return await ConfiguracionesRecibo.create(data);
};

export const findAllConfiguracionesRecibos = async () => {
  return await ConfiguracionesRecibo.findAll();
};

export const findConfiguracionesReciboById = async (id) => {
  return await ConfiguracionesRecibo.findByPk(id);
};

export const updateConfiguracionesRecibo = async (id, data) => {
  return await ConfiguracionesRecibo.update(data, { where: { id_configuraciones_recibo: id } });
};

export const deleteConfiguracionesRecibo = async (id) => {
  return await ConfiguracionesRecibo.destroy({ where: { id_configuraciones_recibo: id } });
};
