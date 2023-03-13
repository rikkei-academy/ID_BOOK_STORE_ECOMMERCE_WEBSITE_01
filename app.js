
const express=require('express')
const cookieSession = require("cookie-session");
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser');
const port=3000;
const routerUser=require('./routes/user.routes')
const routerLogin=require('./routes/login.routes')
const routerLogout=require("./routes/logout.routes")
const routerUpload=require('./routes/uploadImage.routes')
const routerProd=require('./routes/product.routes')
const routerCate=require('./routes/cate.routes')
const routerReview=require('./routes/review.routes')
const routerNews=require ('./routes/news.routes')
const routerOrderDetail=require('./routes/news.routes')
const morgan=require('morgan')
const dotenv=require('dotenv')
const passportSetup = require("./passport");
const passport = require("passport");
const fileUpload=require("express-fileupload")
dotenv.config()
app.use(morgan('dev'))
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
  );
  app.use(fileUpload({
    useTempFiles:true
  }))
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/api/v1/user',routerUser)
app.use('/api/v1/login',routerLogin)
app.use('/api/v1/logout',routerLogout)
app.use('/api/v1/upload',routerUpload)
app.use('/api/v1/product',routerProd)
app.use('/api/v1/cate',routerCate)
app.use('/api/v1/review',routerReview)
app.use('/api/v1/news',routerNews)
app.use('/api/v1/order_detail',routerOrderDetail)
app.listen(port,()=>{
    console.log(`server is running on http://localhost/${port}`)
})

