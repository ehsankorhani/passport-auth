const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
	scope: ['profile'],
	session: false
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { session: false }), (req, res) => {
	return res.send(req.user);
});

module.exports = router;