'use strict';

module.exports = function(mongoose) {
    var Contacts = new mongoose.Schema({
        firstName: String,
        lastName: String,
        middlename: String,
        gender: String,
        birthday : Date,
        address: String,
        course: String,
        contactnum: String,
        Age : Number,
        YearGraduated: Date,
        displayPhoto: [{
            path: String,
            name: String,
            size: String
        }],
        Job: [{
        		jobdescription: String,
        		jobaddress: String,
        		Position: String,
        		DateHired: {
        				Start: Date,
        				End: Date
        		}

        }]
    });

    mongoose.model('Contacts', Contacts);
}
