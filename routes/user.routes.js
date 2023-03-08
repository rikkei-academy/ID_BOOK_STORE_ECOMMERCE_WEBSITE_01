const {regis}=require('../controller/user.controller')
const {checkreg}=require('../middleware/reg.middle')
const express=require('express')
const router=express.Router()
router.post('/',checkreg,regis)
module.exports=router