'use strict';
var config = require('../../config/environment/'+ process.env.NODE_ENV);

exports.setupResponseCallback = function (res) {

    return function (error, returnValue) {
        if (error) {
            return res.status(500).json({result: returnValue, statusCode: 500, msg: error   });
        }

        		   res.status(200).json({result: returnValue, statusCode: 200, msg:'success'});
    }
}
