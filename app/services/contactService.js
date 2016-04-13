'use strict';


var sampleDao = require('../daos/contactDao');

function Address() {
    this.sampleDao = sampleDao;
}
Address.prototype.save = function(data,next) {
    console.log(data);
    sampleDao._save(data, next);
}
Address.prototype.update = function(data,next) {
    sampleDao._update(data,next);
}
Address.prototype.getAll = function(next) {
    sampleDao._getAll(next);
}
Address.prototype.getbySearchKey = function(searchKey,next) {
    sampleDao._getbySearchKey(searchKey,next);
}
Address.prototype.remove = function(id,next) {
    sampleDao._remove(id,next);
}


exports.Address = Address;

