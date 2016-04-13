'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var middleware = require('../app/utils/middleware');
var expressValidator = require('express-validator');
var customValidator = require('../app/validator/')(expressValidator);
var multer  = require('multer');
var path = require('path');
var MongoStore = require('connect-mongo')(session);

module.exports = function(app, passport, mongoose) {

    app.use('/public', express.static(__dirname + '../../public'));
    app.set('port', process.env.APP_PORT || 3000);
    app.set('api_version', process.env.APP_VER || '/api/v1');
    app.set('view engine', 'ejs');
    app.set('views', 'app/view/');
    app.use(morgan('dev'));
    app.use(methodOverride());
    app.use(cookieParser());
    app.use(bodyParser.json({
        type: 'application/json',
        limit: '50mb'
    }));
    app.use(bodyParser.urlencoded({
        extended: true,
        limit: '50mb'
    }));
    app.use(session({
        secret: 'Queuing',
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 3600000 },
        store: new MongoStore({mongooseConnection:mongoose.connection,autoRemove: 'native',clear_interval: 3600000})
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(middleware.allowCrossDomain);
    app.use(expressValidator());
    app.use(multer({
        rename: function(fieldname, filename) {
            return filename.replace(/\W+/g, '-').toLowerCase();
        }
    }));
}