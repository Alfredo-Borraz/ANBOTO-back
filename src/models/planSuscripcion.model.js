import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const PlanSuscripcion = db.sequelize.define('plan_suscripcion', {
  id_plan_suscripcion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_plan: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  duracion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: true 
});

export default PlanSuscripcion;
