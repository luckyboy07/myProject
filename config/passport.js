'use strict';

var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('Users');
var bcrypt = require('bcrypt-nodejs');



module.exports = function(passport) {

    passport.use('user', new LocalStrategy(
        function(username, password, done) {
            console.log(password);
            User.findOne({
                    user_name: username
                }, verifyAuth(password, done))
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    function verifyAuth(password, done) {
        return function(err, user) {
            if (err) {
                console.log('error: 1-if', err);
                return done(err);
            }

            if (!user) {
                console.log('error: 2-if', err);
                return done(null, false);
            }

            if (password != user.pass_word) {
                console.log('error: 3-if', err);
                return done(null, false);
            }

            return done(null, {
                username: user.user_name,
                _id: user._id           
            });
            // return done(null, user);
        }
    }
};
