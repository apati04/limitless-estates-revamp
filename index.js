const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(helmet());
app.use(compression());
app.use(express.json());

app.listen(PORT, () => {
  console.log('server on port ', PORT);
});
