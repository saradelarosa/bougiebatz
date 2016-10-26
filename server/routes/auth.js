//The following is the server-side router logic for Authentication

var express = require('express');
var router = express.Router();
var passport = require('passport');
var database = require('../models/userModel');


//These are routers for authentication

//Router for registration. With successful registration,
//instantiates new user here. savedStory is an empty array
//what's in commented out code is the form of data that is pushed
//to this empty array when users add a currency to the database
router.post('/register', function (req, res) {
    database.User.register(new database.User({
        username: req.body.username,
        savedStory: [
          // //Each is an object representing a story that the user saved
        ]
    }),
        req.body.password, function (err, account) {
            if (err) {
                return res.status(500).json({
                    err: err
                });
            }
            passport.authenticate('local')(req, res, function () {
                return res.status(200).json({
                    status: 'Registration successful!'
                });
            });
        });
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function (err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            res.status(200).json({
                status: 'Login successful!'
            });
        });
    })(req, res, next);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

router.get('/status', function (req, res) {
    if (!req.isAuthenticated()) {
        return res.status(200).json({
            status: false
        });
    }
    res.status(200).json({
        status: true
    });
});

//End of authentication stuff


module.exports = router;
