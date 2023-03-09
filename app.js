const express=require('express')
const cookieSession = require("cookie-session");
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser');
const port=3000;
const routerUser=require('./routes/user.routes')
const routerLogin=require('./routes/login.routes')
const routerLogout=require("./routes/logout.routes")
const morgan=require('morgan')
const dotenv=require('dotenv')
const passportSetup = require("./passport");
const passport = require("passport");
dotenv.config()
app.use(morgan('dev'))
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/api/v1/user',routerUser)
app.use('/api/v1/login',routerLogin)
app.use('/api/v1/logout',routerLogout)

app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`)
})
