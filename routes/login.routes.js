const {login}=require('../controller/login.cotroller')
const {checkLogin}=require('../middleware/login.middle')
const express=require('express')
const router=express.Router()
router.post('/',checkLogin,login)
module.exports=router