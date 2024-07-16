import { Sequelize } from 'sequelize';
import dbConfig from './db.config.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, dbConfig.PORT,{
  dialect: 'mysql',
  host: dbConfig.HOST,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
        .authenticate()
        .then(()=>{
          console.log('Connection has been established successfully.');
        })
        .catch((err)=>{
          console.log('Unable to connect to the database:', err);
        })


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


export default db;



