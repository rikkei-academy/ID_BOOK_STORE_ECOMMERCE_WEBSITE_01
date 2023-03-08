const db = require("../utils/database")
const mysql = require("mysql2")

module.exports.searchByName = (name)=>{
    let sql = `SELECT * FROM book_store_chemas.tbl_user where tbl_user.usename = '${name}'`
    return db.query(sql)
}