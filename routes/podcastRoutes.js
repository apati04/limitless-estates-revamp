const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');
const router = express.Router();
router.get('/podcast', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://www.buzzsprout.com/api/' +
        keys.podcastIdKey +
        '/episodes.json?token=' +
        keys.podcastApiKey,
      {
        headers: {
          Authorization: `Token token=${keys.podcastApiKey}`
        }
      }
    );
    const currEp = data.filter(item => {
      const currentTime = new Date().getTime();
      const episodeTime = new Date(item.published_at).getTime();
      return currentTime >= episodeTime;
    });
    res.status(200).send({ data: currEp });
  } catch (err) {
    if (err) {
      res.status(500).send({ error: err });
    }
  }
});
module.exports = router;
