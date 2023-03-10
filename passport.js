const db = require("./utils/db");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "730155612421-eadc66kd86genetfk1oqhnrhgj3ehg80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "524078413131134";
const FACEBOOK_APP_SECRET = "4bcc3828393b59e2b1f573c53cd87c11";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/login/google/callback",
      scope: ["email", "profile"],
    },
    async function (accessToken, refreshToken, profile, done) {
      let email = profile._json.email;
      try {
        let [find] = await db.execute(
          `select * from tbl_user where email="${email}"`
        );
        if (find.length > 0) {
          console.log(find);
          done(null, find);
        } else {
          let [find] = await db.execute(
            "insert into tbl_user set email=?, username=?, role=1",
            [email, profile._json.name]
          );
          console.log(find);
          await db.execute(
            `update tbl_user set id_cart="${find.insertId}" where email="${email}"`
          );
          done(null, {name:profile._json.name,id:find.insertId,email:email,role:'user'});
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/api/v1/login/facebook/callback",
      profileFields: ["id", "displayName", "photos", "email"],
    },
    async function (accessToken, refreshToken, profile, done) {
      console.log(profile._json.email);
      let email = profile._json.email;
      try {
        let [find] = await db.execute(
          `select * from tbl_user where email="${email}"`
        );
        if (find.length > 0) {
          console.log(find);
          done(null, find);
        } else {
          let [find] = await db.execute(
            "insert into tbl_user set email=?, username=?, role=1",
            [email, profile.displayName]
          );
          console.log(find);
          await db.execute(
            `update tbl_user set id_cart="${find.insertId}" where email="${email}"`
          );
          done(null, {name:profile.displayName,id:find.insertId,email:email,role:'user'});
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);
