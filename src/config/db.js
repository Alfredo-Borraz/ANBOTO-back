import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, dbConfig.PORT,{
  host: dbConfig.HOST,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


export default db;



