const express = require ("express")
const router = express.Router()
const {searchUser} = require("../controller/search.controller")

router.post("/",searchUser)
module.exports = router