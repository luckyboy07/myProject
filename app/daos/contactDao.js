'use strict';

var mongoose = require('mongoose');
var Contacts = mongoose.model('Contacts');

exports._save = function _save(data,next){
    Contacts.create(data, next);
};
exports._update = function _update(data,next){
    console.log(data);
    Contacts.findByIdAndUpdate(data.id, data, next);
};
exports._getAll = function _getAll(next){
    Contacts.find(next);
};

exports._remove = function _remove(id,next){
    Contacts.findByIdAndRemove(id,next);
};