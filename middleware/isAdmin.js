const jwt= require('jsonwebtoken')
module.exports.isAdmin=(req,res,next)=>{
    jwt.verify(req.headers.token,process.env.JWT_ACCESS_KEY,function (err,decode) {
        if (err) {
            res.status(500).json(err)
        }else{
            if(decode.role=='user'){
                res.status(200).json({
                    status:'fail, you are not admin'
                })
            }else{
                next();
            }
        }
    })
}