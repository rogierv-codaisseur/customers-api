const { Router } = require('express');

const { toJWT, toData } = require('./jwt');

const router = new Router();

router.post('/logins', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.send({ jwt: toJWT({ userId: 1 }) });
  } else {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    });
  }
});

router.get('/secret-endpoint', (req, res) => {
  const auth =
    req.headers.authorization && req.headers.authorization.split(' ');
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1]);
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      });
    } catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  } else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    });
  }
});

module.exports = router;
