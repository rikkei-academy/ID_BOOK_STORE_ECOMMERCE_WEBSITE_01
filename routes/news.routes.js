const {addNews,get10News,updateNews,deleteNews,searchNews}=require('../controller/news.controller')
const express=require('express')
const router=express.Router()
router.get('/',get10News)
router.post('/',addNews)
router.put('/:id',updateNews)
router.delete('/:id',deleteNews)
router.get('/:id',searchNews)
module.exports=router