const express = require('express');
const axios = require('axios');
const keys = require('../config/keys');

const router = express.Router();
router.post('/mailchimp/subscribe', async (req, res) => {
  const region = keys.mailChimpApiKey.split('-')[1];
  const rootURL = `https://${region}.api.mailchimp.com/3.0/lists/3c16a06b45/members/`;
  const data = {
    email_address: req.body.email,
    status: 'subscribed'
  };
  try {
    const sub = await axios.post(rootURL, data, {
      headers: {
        Accept: 'application/json',
        Authorization: `Basic ${Buffer.from(
          `apikey:${keys.mailChimpApiKey}`
        ).toString('base64')}`,
        json: true
      }
    });
    res.status(201).send({ message: 'success' });
  } catch (err) {
    res.status(400).send({ message: 'error', err });
  }
});

router.post('/investorformsubmit', (req, res) => {
  const { values, type } = req.body;
  const {
    Q4_contactByTextMessage: textMessage,
    Q4_contactByPhone: phone,
    Q4_contactByEmail: email,
    ...rest
  } = values;
  let Q4_contact = [];
  if (textMessage) {
    Q4_contact.push('Text Message');
  }
  if (email) {
    Q4_contact.push('Email');
  }
  if (phone) {
    Q4_contact.push('Phone');
  }

  axios
    .post('https://hooks.zapier.com/hooks/catch/4733528/74yfp7/', {
      ...rest,
      Q4_contact,
      type
    })
    .then(({ data }) => {
      if (data.status === 'success') {
        return res.status(201).send({ status: data.status });
      } else {
        return res.status(300).send({ status: 'webhook not successful', data });
      }
    })
    .catch(err => res.status(500).send({ error: err }));
});
router.post('/formsectionpost', async (req, res) => {
  const { values, type } = req.body;
  const formSubmit = axios.post(
    'https://hooks.zapier.com/hooks/catch/4733528/708gw7/',
    {
      ...values,
      type
    }
  );
});

router.post('/contactformsubmit', (req, res) => {
  const { values, type } = req.body;
  axios
    .post('https://hooks.zapier.com/hooks/catch/4733528/74ybl2/', {
      ...values,
      type
    })
    .then(({ data }) => {
      if (data.status === 'success') {
        return res.status(201).send({ status: data.status });
      } else {
        return res.status(300).send({ status: 'webhook not successful', data });
      }
    })
    .catch(err => res.status(500).send({ error: err }));
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
    res.send({ error: err });
  }
});

module.exports = router;
