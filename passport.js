const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "730155612421-eadc66kd86genetfk1oqhnrhgj3ehg80.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "524078413131134";
const FACEBOOK_APP_SECRET = "4bcc3828393b59e2b1f573c53cd87c11";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "api/v1/login/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
