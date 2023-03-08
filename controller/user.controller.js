const {getUser,sortById,filterStatus} = require("../model/user.model")

module.exports.getValueUser = async(req,res)=>{
    let [data] = await getUser(0)
    res.json(data)
}

module.exports.getValueBySort =async(req,res)=>{
    const {action} = req.body
    if(action=='tang'){
        const [data]= await sortById()
        res.json()
    }
}

module.exports.filterByStatus=async(req,res)=>{
    const {status} = req.body
    let [data] = await filterStatus(status)
    res.status(200).json(data)
}



