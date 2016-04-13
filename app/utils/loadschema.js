'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(mongoose) {
    var schema = path.resolve(__dirname, '../schemas');
    fs.readdirSync(schema).forEach(function onFile(file) {
        require('../schemas/' + path.basename(file, '.js'))(mongoose);
    });
};
