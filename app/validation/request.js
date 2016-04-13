'use strict';

exports.requestValidate = function(req, res, next){
	req.checkBody('username', 'Error Message here').notEmpty();
    req.checkBody('password', 'Error Message here').notEmpty();
	console('here at request.js -> requestValidate method');

	var error = req.validationErrors();
	if (error) {
       	res.status(200).send(error);
    } else {
        next();
    }
};