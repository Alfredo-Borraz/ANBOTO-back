
const mysql = require('mysql2');
const dbConfig = require('./db.config');

const conecction = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    database: dbConfig.DATABSE,
    password: dbConfig.PASSWORD, 
    port: dbConfig.PORT
})