const {regis,updateUser,deleteUser}=require('../controller/user.controller')
const {checkreg}=require('../middleware/reg.middle')
const {isAdmin}=require('../middleware/isAdmin')
const express=require('express')
const router=express.Router()
router.post('/',checkreg,regis)
router.put('/:id',updateUser)
router.get('/',isAdmin)
router.delete('/:id',deleteUser)
module.exports=router