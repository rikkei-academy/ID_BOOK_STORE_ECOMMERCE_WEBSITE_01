const {getAllCate,addCate,updateCate,delCate}=require(`../model/category`)
module.exports.getAllCate= async (req,res)=>{
 try{
    let [result]=await getAllCate();
    res.status(200).json(result)
 }
 catch(err)
 {
    res.status(500).json(err)
 }
}
module.exports.addCate= async (req,res)=>{
    try{
       let [result]=await addCate(req.body.name);
       res.status(200).json(result)
    }
    catch(err)
    {
       res.status(500).json(err)
    }
   }
   module.exports.updateCate= async (req,res)=>{
    try{
       let [result]=await updateCate(req.body.name,req.params.id);
       res.status(200).json(result)
    }
    catch(err)
    {
       res.status(500).json(err)
    }
   }
   module.exports.delCate= async (req,res)=>{
    try{
       let [result]=await delCate(req.params.id);
       res.status(200).json(result)
    }
    catch(err)
    {
       res.status(500).json(err)
    }
   }