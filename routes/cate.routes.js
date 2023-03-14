const {getAllCate,addCate,delCate,updateCate}= require('../controller/category.controller')
const express=require('express')
const router=express.Router()
router.get('/',getAllCate)
router.post('/:id',addCate)
router.put('/:id',updateCate)
router.delete("/:id",delCate)
module.exports=router