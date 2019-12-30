const router = require('express').Router();
const passport = require('passport');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.send(req.user);
});

module.exports = router;