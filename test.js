/*global describe, it */
'use strict';

var assert = require('assert');
var getBrowsers = require('./');

describe('getBrowsers()', function () {
    it('should fetch 10 items', function (cb) {
        getBrowsers(function (err, data) {
            assert.strictEqual(data.length, 10);
            cb();
        });
    });
});
