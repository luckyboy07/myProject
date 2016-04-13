'use strict';
var config = require('../../config/environment/' + process.env.NODE_ENV);

var	contactctrl   		    = require('../controller/contactCtrl');
// var milestonesctrl      = require('../controller/milestonesCtrl');
// var deliverablesctrl    = require('../controller/deliverablesCtrl');


module.exports = function(app, passport, isLoggedIn, isAdmin) {
    app.route('/').get(function(req, res) {
        res.render('index');
    });
    app.route('/api/1.0/contacts')                         // [ U S E R  A C C O U N T S ]  
            .post(contactctrl.save)
            .put(contactctrl.update)
            .delete(contactctrl.remove)
            .get(contactctrl.getAll);

    // app.route('/api/1.0/users/:id')
    //         .get(userctrl.getbyid);

    // app.route('/api/1.0/searchUsers/:searchKey')
    //         .get(userctrl.getbySearchKey);

   

    // app.route('/api/1.0/login')
    // 		.post(userLoginValidate.validateLogin,passport.authenticate('user'), function(req, res) {
    //         	res.send(req.user)
    //     	});

    app.get('/auth/provider', passport.authenticate('provider'));
    app.get('/auth/provider/callback',
            passport.authenticate('provider', { successRedirect: '/',
                                      failureRedirect: '/login' }));
    app.route('/swaggerpms')
        .get(function onRequest(req, res) {
            var file = 'public/swagger/swagger.json';
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                data = JSON.parse(data);
                res.send(data);
            });
        });
    app.route('/swagger')
        .get(function onRequest(req, res) {
            var file = 'public/dist/index.html';
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) {
                    console.log('Error: ' + err);
                    return;
                }
                res.send(data);
            });
        });

};


