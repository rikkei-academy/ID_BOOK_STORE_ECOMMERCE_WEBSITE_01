const {getAllnew,addNews,updateNews,delNews,searchNews}=require('../model/news')
module.exports.get10News=async(req,res)=>{
   try{
    let {page,per_page}=req.query
    let min=(Number(page)-1)*Number(per_page);
    let max=Number(page)*Number(per_page);
    let [result]=await getAllnew(min,max)
    res.status(500).json(result)
   }
   catch(err)
   {
    res.status(500).json(err)
   }
}
module.exports.addNews=async (req,res)=>{
    try{
        let {title,des}=req.body
        await addNews(title,des)
        res.status(200).json({
            status:'success',
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.updateNews=async(req,res)=>{
    try{
        let {title,des}=req.body
        await updateNews(title,des,req.params.id)
        res.status(200).json({
            status:'success',
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.deleteNews=async(req,res)=>{
    try{
        await delNews(params.id)
        res.status(200).json({
            status:'success',
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}
module.exports.searchNews=async(req,res)=>{
    try{
       let [result]= await searchNews(req.params.id)
        res.status(200).json({
            result
        })
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}