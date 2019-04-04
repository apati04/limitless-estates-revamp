const express = require('express');

const router = express.Router();

router.post('/investorformsubmit', (req, res) => {
  const { values } = req.body;
  console.log(values);
  res.end();
});

router.post('/mailchimp/contactus', async (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: firstname,
      LNAME: lastname,
      MMERGE3: message
    }
  };
  const rootURL =
    'https://us19.api.mailchimp.com/3.0/lists/6f72e55724/members/';
  try {
    const survey = await axios.post(rootURL, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(
          `apikey:${keys.mailChimpApiKey}`
        ).toString('base64')}`,
        json: true
      }
    });
    res.send({ results: survey.data });
  } catch (err) {
    console.log('error: ', err);
    res.send({ error: err });
  }
});

module.exports = router;
