const mysql = require("mysql2");

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"chien2811",
    database:"book_store_chemas"
})

const db = pool.promise()
module.exports = db