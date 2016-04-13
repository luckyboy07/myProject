'use strict';

var mongoose = require('mongoose');
var UserAccount = mongoose.model('Users');

exports._save = function _save(data, next) {
    UserAccount.create(data, next);
};
exports._update = function _update(data, next) {
    UserAccount.findByIdAndUpdate(data.id, data, next);
};
exports._getAll = function _getAll(next) {
    UserAccount.find()
    .populate('roleId')
    .exec(next);
};
exports._getbyid = function _getbyid(id, next) {
    UserAccount.find({_id: id})
    .populate('roleId')
    .exec(next);
};
exports._getbySearchKey = function _getbySearchKey(searchKey, next) {
    console.log('searchKey', searchKey);
    UserAccount.find({
        $text: {
            $search: searchKey
        }
    },next);
};
exports._remove = function _remove(id, next) {
    UserAccount.findByIdAndRemove(id, next);
};
