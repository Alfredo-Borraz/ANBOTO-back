import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const ConfiguracionesRecibo = db.sequelize.define('configuraciones_recibo', {
  id_configuraciones_recibo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dato_tienda: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  dato_cliente: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  texto_encabezado: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  texto_pie: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  fk_pedido: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_pago_cliente_recibo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fk_datos_tienda: {
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

export default ConfiguracionesRecibo;
