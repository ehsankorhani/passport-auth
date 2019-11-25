const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.send(req.user);
    }
);

module.exports = router;
