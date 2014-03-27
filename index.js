'use strict';

var w3counter = require('w3counter');

/**
 * Get ten most popular web browsers
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
    w3counter('browser', function (err, data) {
        if (err) {
            return cb(err);
        }

        return cb(null, data);
    });
};
