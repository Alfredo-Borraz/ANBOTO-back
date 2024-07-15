import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const MetodoPagoCliente = db.sequelize.define('metodo_pago_cliente', {
  id_metodo_pago_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo_tarjeta: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  fecha_expiracion: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  nombre_tarjeta: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  preferida: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  fk_pago_cliente_metodo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_usuario_cliente: {
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

export default MetodoPagoCliente;
