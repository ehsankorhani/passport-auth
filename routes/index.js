const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('res:', res);
  res.status(200).send({
    auth: true,
    message: 'You\'re logged in'
  });
});

module.exports = router;
