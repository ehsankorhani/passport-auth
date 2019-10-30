const router = require('express').Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  session: false
}));

router.get('/login', (req, res, next) => {
  res.send('Login unsuccessful!');
});

module.exports = router;
