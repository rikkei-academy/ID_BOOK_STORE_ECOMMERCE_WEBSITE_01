const db=require('../utils/db')
module.exports.getAllnew=(min,max)=>{
    return db.excecute(`select * from tbl_news limit ${min},${max}`)
}
module.exports.addNews=(title,description)=>{
    return db.excecute(`insert into tbl_news set title=?, description=?`,[title,description])
}
module.exports.updateNews=(title,description,id)=>{
    return db.excecute(`update tbl_news set title=?, description=? where id=?`,[title,description,id])
}
module.exports.delNews=(id)=>{
    return db.excecute(`delete from tbl_news where id=?`,[id])
}
module.exports.searchNews=(title)=>{
    return db.excecute(`select * from tbl_news wherer title like %${title}%`)
}