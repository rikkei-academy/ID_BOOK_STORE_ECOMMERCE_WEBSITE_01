const {searchByName} = require("../model/search.model")

module.exports.searchUser = async(req,res)=>{
   const {name} = req.query
    const [data] = await searchByName(name)
    res.json(data)
}

