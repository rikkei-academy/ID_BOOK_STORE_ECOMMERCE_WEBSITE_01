const {logout}=require('../controller/logout.controller')
const express=require('express')
const router=express.Router()
router.get('/',logout)
module.exports=router