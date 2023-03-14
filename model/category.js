const db=require('../utils/db')
module.exports.getAllCate=()=>{
    return db.execute('select * from tbl_category')
}
module.exports.addCate=(name)=>{
    return db.execute('insert into tbl_category set name=?',[name])
}
module.exports.delCate=(id)=>{
    return db.execute('delete from tbl_category where id=?',[id])
}
module.exports.updateCate=(name,id)=>{
    return db.execute(`update tbl_category set name=? where id=?`,[name,id])
}