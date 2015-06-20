'use strict';
var test = require('ava');
var getBrowsers = require('./');

test('fetch 10 items', function (t) {
	t.plan(2);

	getBrowsers(function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10, data.length);
	});
});
