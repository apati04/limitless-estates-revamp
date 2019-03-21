const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();

router.get('/meetups/lbc', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const url = `https://api.meetup.com/Out-of-State-Multifamily-Apartment-Investors-Meetup/events?sign=true&key=${apiKey}&status=upcoming&page=20&photo-host=public`;
  const response = await axios.get(url);

  if (response.data[0]) {
    const filterData = response.data.filter(({ name, fee }) => {
      return (
        name ===
        'Out of State Apartment Investing Mastermind - Long Beach Chapter'
      );
    });
    res.status(200).send(filterData);
  }
});
router.get('/meetups/cerritos', async (req, res) => {
  const rootUrl = `https://api.meetup.com/Cerritos-Multifamily-Investors-Roundtable/events?sign=true&key=${
    keys.meetupApiKey
  }&status=upcoming&page=6&photo-host=public`;
  const response = await axios.get(rootUrl);
  if (response.data[0]) {
    const filterData = response.data.filter(({ name, fee }) => {
      return name === 'Cerritos Multifamily Investors Roundtable';
    });
    res.status(200).send(filterData);
  }
});

module.exports = router;
