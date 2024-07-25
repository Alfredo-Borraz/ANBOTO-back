import { DataTypes } from 'sequelize';
import db from '../config/db.js';
import Usuario from './usuario.model.js';

const DatosTienda = db.sequelize.define('datos_tienda', {
  id_tienda: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
  },
  nombre_comercio: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  fk_usuario: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_usuario_admin'
    },
    allowNull: false
  }
}, {
  timestamps: false
});

// Establecer la relación
Usuario.hasOne(DatosTienda, { foreignKey: 'fk_usuario_admin' });
DatosTienda.belongsTo(Usuario, { foreignKey: 'fk_usuario_admin' });

export default DatosTienda;
