const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}),
    function (req, res) {
        res.status(201).json('User')
    }
);

module.exports = router;
