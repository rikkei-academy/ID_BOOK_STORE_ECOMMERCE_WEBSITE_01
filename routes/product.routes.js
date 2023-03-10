const {getAllProd,updateProd,addProd,delProd,searchPro}=require('../controller/product.controller')
const express=require('express')
const router=express.Router()
router.get('/',getAllProd)
router.post('/',addProd)
router.put('/:id',updateProd)
router.delete('/:id',delProd)
router.get('/search',searchPro)
module.exports=router