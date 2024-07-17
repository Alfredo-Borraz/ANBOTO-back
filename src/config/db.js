import  Sequelize  from 'sequelize';
import dbConfig from './db.config.js';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
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



