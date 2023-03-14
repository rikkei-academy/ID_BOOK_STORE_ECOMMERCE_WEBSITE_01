const {getOrderDetail,deleteOrderDetail,createOrderDetail}=require ('../controller/Orderdetail.controller')
const router=require('express').Router()
router.get('/',createOrderDetail)
router.get('/:id',getOrderDetail)
router.delete('/:id',deleteOrderDetail)
module.exports=router