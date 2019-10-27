const router = require('express').Router();
const passport = require('passport');

router.post('/login', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

// router.post('/login', 
//   passport.authenticate('local', 
//   { failureRedirect: '/login' }), (req, res) => {
//     res.redirect('/');
// });

// auth login
router.get('/login', (req, res, next) => {
  //res.render('login', { user: req.user });
  res.send('Login');
});

// // auth logout
// router.get('/logout', (req, res) => {
// 	req.logout();
// 	res.redirect('/');
// });

/* GET auth listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;
