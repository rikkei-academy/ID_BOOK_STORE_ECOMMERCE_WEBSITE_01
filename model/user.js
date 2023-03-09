const db=require('../utils/db')

module.exports.getAllUSer=()=>{
    return db.execute('select * from tbl_user')
}
module.exports.addOnceUser=(username,email,password)=>{
    return db.execute(`insert into tbl_user set username=?, email=?, password=?, role=1`,[username,email,password])
}
module.exports.updateIdcart=(id)=>{
    return db.execute(`update tbl_user set id_cart=${id} where id="${id}"`)
}
module.exports.deleteUser=(id)=>{
    return db.execute(`delete from tbl_user where id='${id}'`)
}
module.exports.updateUser=(role,id)=>{
    return db.execute(`update tbl_user set role='${role}' where id="${id}"`)
}