const { login } = require("../controller/login.cotroller");
const { checkLogin } = require("../middleware/login.middle");
const jwt = require("jsonwebtoken");
const express = require("express");
const passport = require("passport");
const router = express.Router();
router.post("/", checkLogin, login);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    res.send(req.user);
  }
);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  function (req, res) {
    console.log(JSON.stringify(req.user));
    console.log(req.user.toString());
    const token = jwt.sign({ data: req.user }, process.env.JWT_ACCESS_KEY);
    res.status(200).json({
      status: "sucess",
      token: token,
    });
  }
);
module.exports = router;
