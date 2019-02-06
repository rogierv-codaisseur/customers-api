const { Router } = require('express');

const { toJWT } = require('./jwt');

const router = new Router();

router.post('/logins', (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    res.send({ jwt: toJWT({ userId: 1 }) });
  } else {
    res.status(400).send({
      message: 'Please supply a valid email and password'
    });
  }
});

module.exports = router;
