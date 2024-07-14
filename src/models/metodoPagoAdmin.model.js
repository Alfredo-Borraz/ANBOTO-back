import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const MetodoPagoAdmin = db.sequelize.define('metodo_pago_admin', {
  id_metodo_pago_admin: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo_tarjeta: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  preferida: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  fk_pago_metodo_pago_admin: {
    type: DataTypes.INTEGER,
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

export default MetodoPagoAdmin;
