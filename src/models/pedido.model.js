import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Pedido = db.sequelize.define('pedido', {
  id_pedido: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    allowNull: false
  },
  total_pedido: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fk_estado: {
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

export default Pedido;
