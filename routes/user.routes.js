const {regis}=require('../controller/user.controller')
const {checkreg}=require('../middleware/reg.middle')
const {isAdmin}=require('../middleware/isAdmin')
const express=require('express')
const router=express.Router()
router.post('/',checkreg,regis)
router.get('/',isAdmin)
module.exports=router