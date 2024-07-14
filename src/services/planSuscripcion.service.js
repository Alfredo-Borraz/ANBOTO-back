import PlanSuscripcion from '../models/planSuscripcion.model.js';

export const createPlanSuscripcion = async (data) => {
  return await PlanSuscripcion.create(data);
};

export const findAllPlanesSuscripcion = async () => {
  return await PlanSuscripcion.findAll();
};

export const findPlanSuscripcionById = async (id) => {
  return await PlanSuscripcion.findByPk(id);
};

export const updatePlanSuscripcion = async (id, data) => {
  return await PlanSuscripcion.update(data, { where: { id_plan_suscripcion: id } });
};

export const deletePlanSuscripcion = async (id) => {
  return await PlanSuscripcion.destroy({ where: { id_plan_suscripcion: id } });
};
