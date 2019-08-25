const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();

router.get('/meetups/lbc', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const url = `https://api.meetup.com/MultiFamilyMasters/events?sign=true&status=upcoming&page=20&fields=featured_photo,event_hosts,rsvp_rules&photo-host=public`;
  try {
    const response = await axios.get(url);
    const filterData = response.data.filter(({ name }) =>
      name.includes('Long Beach Chapter')
    );
    res.status(200).send({ results: filterData });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});
router.get('/meetups/cerritosmeetup', async (req, res) => {
  const rootUrl = `https://api.meetup.com/Cerritos-Multifamily-Investors-Roundtable/events?sign=true&status=upcoming&fields=featured_photo,event_hosts,rsvp_rules&page=6&photo-host=public`;
  try {
    const response = await axios.get(rootUrl);
    if (response.data[0]) {
      const filterData = response.data.filter(({ name, fee }) => {
        return name.includes('Cerritos Multifamily Investors Roundtable');
      });
      res.status(200).send({ results: filterData });
    }
  } catch (err) {
    console.log(err);
    res.status(404).send({ error: err });
  }
});

router.get('/meetups/phoenix', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const url = `https://api.meetup.com/MultifamilyMasters-com-Phoenix-AZ/events?sign=true&status=upcoming&page=20&fields=featured_photo,event_hosts,rsvp_rules&photo-host=public`;
  let meetupName = 'Phoenix';

  try {
    const response = await axios.get(url);

    const filterData = response.data.filter(({ name }) =>
      name.includes(meetupName)
    );

    res.status(200).send({ results: filterData });
  } catch (err) {
    res.status(404).send({ error: err });
  }
});

module.exports = router;
