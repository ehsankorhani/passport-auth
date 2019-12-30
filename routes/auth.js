const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/google', passport.authenticate('google', {
	scope: ['email'],
	session: false
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { session: false }), (req, res) => {
	// do this properly:	
	const email = req.user.emails[0].value;
	const token = jwt.sign({ email: email }, process.env.JWT_SECRET);

	return res.status(200).send({
		auth: true,
		token: token,
		message: 'user found & logged in',
	});
});

module.exports = router;