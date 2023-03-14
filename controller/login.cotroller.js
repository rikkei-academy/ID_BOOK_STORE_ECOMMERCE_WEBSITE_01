const jwt=require('jsonwebtoken')
module.exports.login=(req,res)=>{
    console.log(req.user);
    const {password,...other}=req.user
    const token=jwt.sign({name:other.username,id:other.id,role:other.role},process.env.JWT_ACCESS_key)
    res.cookie("cookieToken",token,{sign:"true"})
    res.status(200).json({
        status:"success",
        token:token
    })
}