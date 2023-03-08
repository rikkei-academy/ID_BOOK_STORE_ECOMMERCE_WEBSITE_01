const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser');
const port=3000;
const routerUser=require('./routes/user.routes')
const routerLogin=require('./routes/login.routes')
const morgan=require('morgan')
const dotenv=require('dotenv')
dotenv.config()
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/api/v1/user',routerUser)
app.use('/api/v1/login',routerLogin)

app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`)
})
