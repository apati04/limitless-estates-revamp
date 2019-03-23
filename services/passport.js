const passport = require('passport');
const MeetupStrategy = require('passport-oauth2-meetup').Strategy;
const {
  meetupOauthKey,
  meetupOauthSecret,
  meetupOauthCallback
} = require('../config/keys');

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
      callbackURL: 'https://a2019e13.ngrok.io/auth/meetup/callback',
      autoGenerateUsername: true
    },
    function(accessToken, refreshToken, profile, done) {
      if (!profile) {
        return;
      }
      return done(null, { accessToken, profile });
    }
  )
);
