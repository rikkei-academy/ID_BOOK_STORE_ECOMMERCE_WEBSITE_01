const {getUser,sortById,filterStatus,findUserByEmail,makeNewPassword,checkEmailAndPassword,updatePassword} = require("../model/user.model")
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
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

module.exports.fogortPassword = async(req,res)=>{
    const {email} = req.body;
    const [result] = await findUserByEmail(email)
    if(result.length>0){
        await makeNewPassword(result[0].id)
        sendMail(email)
    }else{
        res.status(200).json("email not exist")
    }

}
module.exports.resetPassword = async(req,res)=>{
    const {email,oldPassword,newPassword} = req.body

    let [data] = await checkEmailAndPassword(email,oldPassword)

    if(data.length>0){
        await updatePassword(data[0].id,newPassword).then(()=>res.json("update thanh cong"))
    }else{
        res.status(300).json("update khong thanh cong")
    }
}

















function sendMail (mail){
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'manhchienltpt@gmail.com',
          pass: 'vpunxsitiktawbxf'
      }
    });
    let mailDetails = {
      from: 'manhchienltpt@gmail.com',
      to: mail,
      subject: 'Chien nguyen gui mail',
      text: 'new password 1234567'
    };
    mailTransporter.sendMail(mailDetails, function(err, data) {
      
      if(err) {
          console.log(err);
      } else {
          console.log('Email sent successfully');
      }
    });
  }



