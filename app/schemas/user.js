/*jshint camelcase: false */

'use strict';

module.exports = function(mongoose) {
    var Users = new mongoose.Schema({
        username: String,
        password: String,

        contactID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Contacts'
        },
        log_inDate: Date,
        u_isverified: Number,
        isOnline: {
            type: Number,
            default: 0
        }
    });



    mongoose.model('Users', Users);

};
