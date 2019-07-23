const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();

router.get('/meetups/cerritos', async (req, res) => {
  const rootUrl = `https://api.meetup.com/Cerritos-Multifamily-Investors-Roundtable/events?sign=true&key=${
    keys.meetupApiKey
    }&status=upcoming&fields=featured_photo,event_hosts,rsvp_rules&page=6&photo-host=public`;

  const response = await axios.get(rootUrl);
  if (response.data[0]) {
    const filterData = response.data.filter(({ name, fee }) => {
      return name.includes('Cerritos Multifamily Investors Roundtable');
    });
    res.status(200).send({ results: filterData });
  }
});

router.get('/meetups/:loc', async (req, res) => {
  const apiKey = keys.meetupApiKey;
  const { loc } = req.params;
  const url = `https://api.meetup.com/MultiFamilyMasters/events?sign=true&key=${apiKey}&status=upcoming&page=20&fields=featured_photo,event_hosts,rsvp_rules&photo-host=public`;
  let meetupName;
  if(loc === 'longbeach') {
     meetupName = 'Long Beach Chapter';
  }
  if(loc === 'phoenix') {
    meetupName = 'Phoenix Chapter'
  }
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
