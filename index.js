'use strict';

var cheerio = require('cheerio');
var http = require('http');

/**
 * Get ten most popular web browsers
 *
 * @param {Function} cb
 * @api public
 */

module.exports = function (cb) {
    var chunk = '';
    var ret = [];

    http.get('http://www.w3counter.com/globalstats.php', function (res) {
        if (res.statusCode !== 200) {
            return cb(res.statusCode);
        }

        res.on('data', function (data) {
            chunk += data;
        });

        res.on('end', function () {
            var $ = cheerio.load(chunk);

            $('th').filter(function () {
                return this.text() === 'Web Browsers';
            }).parent().nextAll('.item').each(function () {
                ret.push(this.text());
            });

            if (ret.length === 0) {
                return cb('Couldn\'t get any browsers');
            }

            cb(null, ret);
        });
    }).on('error', function (err) {
        return cb(err);
    });
};
