
import dbConfig from './db.config.js';
const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, dbConfig.PORT,{
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
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



