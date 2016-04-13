/*jshint camelcase: false */

'use strict';

module.exports = function(mongoose) {
    var Posting = new mongoose.Schema({
        contactID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contacts'
        },
        description: String,
        linkaddress: String,
        DateofPost: Date
    });



    mongoose.model('Posting', Posting);

};
