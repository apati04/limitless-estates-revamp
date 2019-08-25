const passport = require('passport');
const MeetupStrategy = require('passport-oauth2-meetup').Strategy;
const { meetupOauthKey, meetupOauthSecret } = require('../config/keys');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new MeetupStrategy(
    {
      clientID: meetupOauthKey,
      clientSecret: meetupOauthSecret,
      callbackURL: '/auth/meetup/callback',
      autoGenerateUsername: true,
      proxy: true
    },
    function(accessToken, refreshToken, profile, done) {
      return done(null, { accessToken, profile });
    }
  )
);
