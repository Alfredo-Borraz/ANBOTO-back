import { DataTypes } from 'sequelize';
import db from '../config/db.js';

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
    type: DataTypes.STRING(45),
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  fk_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

export default DatosTienda;
