import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const UsuarioCliente = db.sequelize.define('usuario_cliente', {
  id_usuario_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  numero_telefono: {
    type: DataTypes.STRING(10),  
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  acepta_termino: {
    type: DataTypes.TINYINT,
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

export default UsuarioCliente;
