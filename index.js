const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const passport = require('passport');
const podcastRoutes = require('./server/routes/podcastRoutes');
const eventRoutes = require('./server/routes/eventRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

require('./server/services/passport');
require('./server/routes/meetupRoutes')(app);
app.use('/podcasts', podcastRoutes);
app.use('/events', eventRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

if (process.env.NODE_ENV === 'production') {
  console.log('prod');
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.resolve(__dirname, 'client', 'public')));
  console.log('publc');
  app.get('/', (req, res) => {
    console.log('publc');
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

// Serve up static assets (usually on heroku)

app.listen(PORT, () => {
  console.log('server on port ', PORT);
});
