const express = require ("express")
const router = express.Router()
const {fogortPassword,resetPassword} = require("../controller/user.controller")

router.post("/forgot-password",fogortPassword)
router.post("/reset-password",resetPassword)
module.exports = router