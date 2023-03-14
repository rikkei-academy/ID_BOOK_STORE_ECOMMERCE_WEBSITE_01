const {getAllUSer}=require('../model/user')
module.exports.checkreg=async(req,res,next)=>{
    try{
        const error={}
        let [result]= await getAllUSer()
        console.log(result);
        let find=result.find(e=>{
          return  e.email==req.body.email
        })
        if (find) {
            error['errEmail']='Email đã tồn tại',
            res.status(200).json(error)
        }else{
            next()
        }
        
    }
    catch(err)
    {
        res.status(500).json(err)
    }

}