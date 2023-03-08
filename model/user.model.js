const db = require("../utils/database")
const mysql = require("mysql2")

module.exports.getUser=(page)=>{
    let sql = `SELECT * FROM book_store_chemas.tbl_user limit ${page*5},3`
    return db.query(sql)
}
module.exports.blockUser = (id)=>{
    let sql = "UPDATE `book_store_chemas`.`tbl_user` SET `status` = 'block' WHERE (`id` = ?);"
    let value =[id]
    sql = mysql.format(sql,value)
    return db.query(sql)
}
module.exports.sortById =()=>{
    return db.query("SELECT * FROM book_store_chemas.tbl_user order by tbl_user.id desc")
}

module.exports.filterStatus=(status)=>{
    return db.query(`SELECT * FROM book_store_chemas.tbl_user  where status = "${status}"`)
}
module.exports.findUserByEmail = (email)=>{
    return db.query(`SELECT * FROM book_store_chemas.tbl_user where tbl_user.email ="${email}";`)
}
module.exports.makeNewPassword = (id)=>{
    return db.query(`UPDATE book_store_chemas.tbl_user SET password = '12345678' WHERE (id = ${id});`)
}
module.exports.checkEmailAndPassword =(email,password)=>{
    return db.query(`SELECT * FROM book_store_chemas.tbl_user where tbl_user.email ="${email}" and tbl_user.password = "${password}"`)
}

module.exports.updatePassword=(use_id,newPassword)=>{
    return db.query(`UPDATE book_store_chemas.tbl_user SET password = '${newPassword}' WHERE (id = ${use_id});`)
}