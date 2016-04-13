'use strict';

exports.validateUser = function(req, res, next) {

    //req.checkBody('username', 'Please enter an Last Name').notEmpty();
    //req.checkBody('username', 'Last Name contains only letters.').isAlpha();

    req.checkBody('password', 'Please enter your PASSWORD').notEmpty();

    req.checkBody('firstname', 'Please enter your PASSWORD').notEmpty();
    req.checkBody('firstname', 'First Name contains only letters.').isAlpha();

    req.checkBody('lastname', 'Please enter your PASSWORD').notEmpty();
    req.checkBody('lastname', 'First Name contains only letters.').isAlpha();
    // req.checkBody('u_mi', 'Middle Initial contains only letters.').optional().isAlpha();

    var errors = req.validationErrors();

    if (errors) {
        res.status(200).send(errors);
    } else {
        next();
    }
};

exports.validateUsersPassword = function(req, res, next) {

    if(req.body.password != req.body.confirm){
        res.status(500).send('Password does not match');
    }else{
        req.checkBody('pass_word', 'Please enter a Password').notEmpty();
        req.checkBody('confirm', '6 to 20 characters required').len(6, 20);

        var errors = req.validationErrors();

        if (errors) {
            res.status(200).send(errors);
        } else {
            next();
        } 
    }
};