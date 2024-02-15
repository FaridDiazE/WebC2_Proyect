const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// crea una coneccion a la base de datos
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// abrir la coneccion de MYSQL
connection.connect(error => {
    if (error) throw error;
    console.log("la conceccion a la base de datos a sido exitoso.");
});

module.exports = connection;