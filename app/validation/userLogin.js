'use strict';

exports.validateLogin = function(req, res, next){
    
	//req.checkBody('username', 'Error Message here.. [username issue]').notEmpty();
    req.checkBody('password', 'Error Message here.. [password issue]').notEmpty();

	var errors = req.validationErrors();
    console.log('(log)-> validating login.',errors);
    if (errors) {
    	console.log('(log)-> inside if.');
        res.status(200).send(errors);
    } else {
    	console.log('(log)-> inside else.');
        next();
    }
}
