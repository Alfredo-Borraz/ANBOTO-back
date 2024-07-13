import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const UsuarioAdmin = db.sequelize.define("usuario_admin", {
  id_usuario_admin: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
    type: DataTypes.DATE,
    allowNull: false
  },
  acepta_termino: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  fk_metodo_pago_admin_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_configuraciones_recibo_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  fk_datos_tienda_usuario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

export default UsuarioAdmin;
