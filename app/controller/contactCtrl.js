'use strict';

var sampleService = require('../services/contactService').Address;
var indexservice = new sampleService();
var cb = require('./../utils/callback');

exports.save = function onRequest(req, res) {
	indexservice.save(req.body, cb.setupResponseCallback(res));
};

exports.update = function onRequest(req, res) {
    indexservice.update(req.body, cb.setupResponseCallback(res));
};

exports.getAll = function onRequest(req, res) {
    indexservice.getAll(cb.setupResponseCallback(res));
};

exports.getbyid = function onRequest(req, res) {
    indexservice.getbyid(req.params.id,cb.setupResponseCallback(res));
};

exports.getbySearchKey = function onRequest(req,res) {
	indexservice.getbySearchKey(req.params.searchKey,cb.setupResponseCallback(res));
};

exports.remove = function onRequest(req, res) {
	indexservice.remove(req.body.id,cb.setupResponseCallback(res));
};
