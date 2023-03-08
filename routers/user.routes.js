const express = require ("express")
const router = express.Router()
const {fogortPassword} = require("../controller/user.controller")

router.post("/",fogortPassword)



module.exports = router