const bcrypt=require('bcrypt')
const saltRounds = 10;
const {addOnceUser,updateIdcart,deleteUser,updateUser}=require('../model/user')
module.exports.regis=async (req,res)=>{
 try{
    const hash=bcrypt.hashSync(req.body.password,saltRounds)
    let [result]=await addOnceUser(req.body.username,req.body.email,hash)
    console.log(result.insertId);
    await updateIdcart(result.insertId)
    res.status(200).json({
        status:'success'
    })

 }
 catch(err)
 {
    res.status(500).json(err)
 }
}
module.exports.updateUser= async(req,res)=>{
   try{
      await updateUser(req.body.role,req.params.id)
      res.status(200).json({
         status:'success'
      })
   }
   catch(err)
   {
      res.status(500).json(err)
   }
}
module.exports.deleteUser=async(req,res)=>{
   try{
      await deleteUser(req.params.id)
      res.status(200).json({
         status:'success'
      })
   }
   catch(err)
   {
      res.status(500).json(err)
   }
}