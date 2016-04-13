'use strict';

process.env.TZ = 'UTC';

require('./config/env')();
var env = process.env.NODE_ENV || 'development',
    application = require('./config/application'),
    express = require('express'),
    bunyan = require('bunyan'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    middleware= require('./app/utils/middleware'),
    config = require('./config/environment/' + env),
    Database = require('./app/utils/database').Database,
    database = new Database(mongoose, config),
    log = bunyan.createLogger({
        name: config.app_name
    }),
    app = express();

process.env.NODE_ENV = env;

require(application.utils + 'helper')(database, app, log, config);
require(application.utils + 'loadschema')(mongoose);
require(application.config + 'express')(app, passport, mongoose);
require(application.config + 'passport')(passport,mongoose);

/** ROUTES **/

require(application.routes)(app,passport,middleware.isLoggedIn,middleware.isAdmin);

module.exports = app;
