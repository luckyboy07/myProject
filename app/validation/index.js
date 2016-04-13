'use strict';

exports.validateSample = function(req, res, next) {

    req.checkBody('username', 'Error Message here').notEmpty();
    req.checkBody('password', 'Error Message here').isAlpha();

    var errors = req.validationErrors();

    if (errors) {
        res.status(200).send(errors);
    } else {
        next();
    }
};
