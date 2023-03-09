const {login}=require('../controller/login.cotroller')
const {checkLogin}=require('../middleware/login.middle')
const express=require('express')
const passport=require('passport')
const router=express.Router()
router.post('/',checkLogin,login)
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
    "/google/callback",
    passport.authenticate("google"), function (req,res) {
        console.log(req.user);
    }
  );
router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: "/login/failed",
  })
);
module.exports=router