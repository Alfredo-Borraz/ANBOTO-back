import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const CarritoCompra = db.sequelize.define('carrito_compra', {
  id_carrito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_creacion: {
    type: DataTypes.DATE(6),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  fk_usuario_cliente_carrito: {
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

export default CarritoCompra;
