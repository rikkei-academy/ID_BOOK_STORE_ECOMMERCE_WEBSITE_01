const {getAllUSer}=require('../model/user')
const bcrypt=require('bcrypt')
const saltRounds = 10;
module.exports.checkLogin=async (req,res,next)=>{
    try{
        let [result]=await getAllUSer()
    const error={}
    let find =result.find(e=>{
    return e.email==req.body.email
    })
    if (!find) {
        error['errEmail']='Email khong ton tai';

    }else{
        let password=find.password;
        console.log(password);
        let compare=bcrypt.compareSync(req.body.password,password)
        console.log(compare);
        if(!compare){
            error['errPass']='Password incorrect'
        }else{
            console.log(process.env);
            req.user=find;
            next()
        }
    }
    if(error.errEmail || error.errPass ){
        res.status(404).json(error)
    }
    }
    catch(err)
    {
        res.status(500).json(err)
    }
    
}