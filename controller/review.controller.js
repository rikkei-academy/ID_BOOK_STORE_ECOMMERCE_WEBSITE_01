const {getBookcanReview,getAllRevieWithUser,getAllReviewWithProduct,updateReview,addReview,deleteReview}=require('../model/review')
module.exports.getBookCanReview=async (req,res)=>{
    try{
        let [result]=await getBookcanReview(req.header.token.id)
        res.status(200).json(result)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getReviewWithUser=async (req,res)=>{
    try{
        let [result]=await getAllRevieWithUser(req.header.token.id)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.getAllReviewWithProduct=async (req,res)=>{
    try{
        let [result]=await getAllRevieWithUser(req.params.id)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.updateReview=async (req,res)=>{
    try{
        await updateReview(req.body.content,req.body.rate,req.headers.token.id,req.params.id)
        res.status(200).json({
            status:'success'
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.addReview=async (req,res)=>{
    try{
        await addReview(req.body.content,req.body.rate,req.headers.token.id,req.params.id)
        res.status(200).json({
            status:'success'
        })
    }   
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.deleteReview= async(req,res)=>{
    try{
        await deleteReview(req.params.id)
        res.status(200).json({
            status:'success'
        })
    }   
    catch(err)
    {
        res.status(500).json(err)
    }
}