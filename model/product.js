const db=require('../utils/db')
module.exports.getAllProd=()=>{
    return db.execute('select * from tbl_product')
}
module.exports.addProd=(name,stock,price,year,rating, description, image, author,title, cate)=>{
    const arr=[name,stock,price,year,rating, description, image, author,title, cate]
    return db.execute(`insert into tbl_product where name_product=?, number_stock=?, price=?, year=?, rating=?, description=?, image=?, author=?, title=?, category_id=?`,arr)
}
module.exports.updateProduct=(stock,id)=>{
    return db.execute(`update tbl_product set number_stock=number_stock-${stock} where id="${id}"`)
}
module.exports.deleteProd=(id)=>{
    return db.execute(`delete from tbl_product where id="${id}"`)
}