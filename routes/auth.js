const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtSecret = require('./../config/jwt-config');

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    //if (err) { return next(err); }
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user: user
      });
    }

    req.logIn(user, { session: false }, err => {
      if (err) { return res.send(err); }

      const token = jwt.sign({ id: user.username }, jwtSecret.secret);
 
      return res.status(200).send({
        auth: true,
        token: token,
        message: 'user found & logged in',
      });

    });
  })(req, res, next);
});

router.get('/login', (req, res, next) => {
  res.send('Login unsuccessful!');
});

module.exports = router;
