const express = require ("express")
const router = express.Router()
const {getValueUser,getValueBySort,filterByStatus} = require("../controller/user.controller")
router.get("/user",getValueUser)
router.post('/user',getValueBySort)
router.post("/filter",filterByStatus)



module.exports = router


