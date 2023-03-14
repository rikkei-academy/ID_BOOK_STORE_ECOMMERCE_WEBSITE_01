const {getOrderDetail,createOrderDetail,deleteOrderDetail}=require('../model/order_detail')
module.exports.createOrderDetail= async (req,res)=>{
    try{
        let [result]=await createOrderDetail(req.user.id)
    res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getOrderDetail= async (req,res)=>{
    try{
        let [result]=await getOrderDetail(req.params.id,req.user.id)
    res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.deleteOrderDetail= async (req,res)=>{
    try{
      await deleteOrderDetail(req.params.id)
    res.status(200).json({
        status:'success'
    })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}