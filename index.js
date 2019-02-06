const express = require('express');
const bodyParser = require('body-parser');

const authRouter = require('./auth/routes');
const customersRouter = require('./customers/routes');
const companiesRouter = require('./companies/routes');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(bodyParser.json())
  .use(authRouter)
  .use(customersRouter)
  .use(companiesRouter)
  .listen(port, () => console.log(`Listening on port ${port}`));
