//The following is the server-side router logic for Authentication

var express = require('express');
var router = express.Router();
var passport = require('passport');

var database = require('../models/userModel.js');


//Router for registration. With successful registration,
//instantiates new user here. savedSearch is an empty array
//what's in commented out code is the form of data that is pushed
//to this empty array when users add a currency to the database
router.post('/register', function (req, res) {
    // console.log("REQUEST USERNAME??????",req.body.password);
    database.User.register(new database.User({
            username: req.body.username,
            savedStories: [],
            likedStories: []
        }),

        //here we create/authenticate the username, password and add the savedStories empty array for
        // the user to push to when adding stories to persist on the database


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
