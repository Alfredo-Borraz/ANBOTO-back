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
    allowNull: true
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  contenido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  fk_usuario_cliente_opinion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_producto_opinar: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  sentiment_scores: {
    type: DataTypes.TEXT,
    allowNull: true
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
