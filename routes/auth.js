const router = require('express').Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', {
	session: false,
	scope: 'openid email'
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { session: false }), (req, res) => {
	// do this properly:	
	//const email = req.user.emails[0].value;
  //const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
	
	console.log(`request:`);
  console.log(req.user);

	return res.status(200).send({
		auth: true,
		token: req.user,
		message: 'user found & logged in',
	});
});

module.exports = router;