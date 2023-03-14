const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

const home = require("./routers/home.routes")
const search = require("./routers/search.routes")
const accountUser = require("./routers/user.routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/",home)
app.use("/search",search)
app.use("/account",accountUser)


app.listen(port,()=>{
console.log(`listen http://localhost/${port}`);

})