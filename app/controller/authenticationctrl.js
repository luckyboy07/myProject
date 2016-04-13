'use strict';

var passport = require('passport');

var cb = require('./../utils/callback');


exports.viewLogin = function onRequest(req, res, next) {
    res.render('./../view/index.ejs');
}

exports.loginUser = function onRequest(req, res, next) {
    passport.authenticate('Users'),
        function(req, res) {
            res.send("Successfully login");
        }
}

exports.logout = function onRequest(req, res) {
    req.logOut();
    res.redirect('/');
}
