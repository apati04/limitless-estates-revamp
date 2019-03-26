const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();

router.get('/meetups/lbc', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const url = `https://api.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/events?sign=true&key=${apiKey}&status=upcoming&page=20&fields=featured_photo,event_hosts,rsvp_rules&photo-host=public`;

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
router.get('/meetups/cerritos', async (req, res) => {
  const rootUrl = `https://api.meetup.com/Cerritos-Multifamily-Investors-Roundtable/events?sign=true&key=${
    keys.meetupApiKey
  }&status=upcoming&fields=featured_photo,event_hosts,rsvp_rules&page=6&photo-host=public`;
  const response = await axios.get(rootUrl);
  if (response.data[0]) {
    const filterData = response.data.filter(({ name, fee }) => {
      return name === 'Cerritos Multifamily Investors Roundtable';
    });
    res.status(200).send(filterData);
  }
});

module.exports = router;
