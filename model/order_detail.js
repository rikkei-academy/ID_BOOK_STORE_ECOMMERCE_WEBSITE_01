const db=require('../utils/db')
module.exports.getOrderDetail=(id,id_user)=>{
    return db.execute(`select name_product, b.id_order, b.quantity, b.price from tbl_product, (select id_product, id_order,  quantity, price where id_order=${id} and id_user=${id_user}) as b where tbl_product.id_poduct=b.id_product`)
}
module.exports.createOrderDetail=(id)=>{
    return db.execute(`select * from tbl_order where id_user= ${id}`)
}
module.exports.deleteOrderDetail=(id)=>{
    return db.execute(`delete * from tbl_cart where id_order=${id}`)
}