module.exports.logout=(req,res)=>{
    res.clearCookie()
    res.status(200).json({
        status:'success'
    })
    res.end()
}