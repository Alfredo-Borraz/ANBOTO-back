import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Opinion = db.sequelize.define('opinion', {
  id_opinion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  titulo: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  contenido: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  fecha_opinion: {
    type: DataTypes.DATE(6),
    allowNull: false
  },
  fk_usuario_cliente_opinion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_producto_opinar: {
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

export default Opinion;
