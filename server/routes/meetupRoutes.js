const axios = require('axios');
const passport = require('passport');
const isAuth = require('../middleware/isAuth.js');

module.exports = app => {
  app.get(
    '/auth/meetup',
    passport.authenticate('meetup', {
      scope: ['rsvp']
    }),
    (req, res) => {
      res.json(req.user);
    }
  );
  app.get(
    '/auth/meetup/callback',
    passport.authenticate('meetup', {
      session: false,
      successRedirect: '/events/meetups/longbeach/thankyou',
      failureRedirect: '/404'
    })
  );
  app.get('/user', (req, res) => {
    res.status(200).send({ user: req.user });
  });
  app.get('/404', (req, res) => {
    res.send('error');
  });
  app.get('/member', isAuth, async (req, res) => {
    const { accessToken } = req.user;
    const eventId = 'gblcppyzgbmb';
    try {
      const rsvp = await axios.post(
        `https://api.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/events/${eventId}/rsvps?access_token=${accessToken}&response=yes&fields=survey_questions`
      );
      res.status(200).send({ data: rsvp.data });
    } catch (err) {
      if (err) {
        res.status(404).send({ error: err });
      }
    }
  });

  app.get('/login', (req, res) => {
    res.send('login: error');
  });
  app.get('/api/user', (req, res) => {
    res.send({ user: req.user });
  });
};
