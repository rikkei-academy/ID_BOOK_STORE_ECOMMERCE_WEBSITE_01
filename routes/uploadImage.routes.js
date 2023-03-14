const {upLoadImage}=require('../controller/uploadImage.controller')
const express=require('express')
const router=express.Router()
router.post('/',upLoadImage)
module.exports=router