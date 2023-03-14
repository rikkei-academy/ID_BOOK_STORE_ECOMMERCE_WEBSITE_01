 const db=require('../utils/db')
 module.exports.getBookcanReview=(id)=>{
    return db.execute('select * from tbl_cart where id_user=? and id_order is not null and review=true',[id])
 }
 module.exports.getAllRevieWithUser=(id)=>{
    return db.execute('select * from tbl_review where id =?',[id])
 }
 module.exports.updateReview=(content,rate,user,product_id)=>{
    return db.execute('update tbl_review set content=?, rate=? where user_id=? and product_id=?',[content,rate,user,product_id])
 }
 module.exports.addReview=(content,rate,user_id,product_id)=>{
    return db.execute('insert into tbl_user set content=?, rate=?, user_id=?, product_id=?',[content,rate,user_id,product_id])
 }
 module.exports.deleteReview=(id)=>{
    return db.execute('delete from tbl_review where id=?',[id])
 }
 module.exports.getAllReviewWithProduct=(product_id)=>{
    return db.execute('select * from tbl_user where product_id=?',[product_id])
 }