'use strict';

var getBrowsers = require('./');
var test = require('ava');

test('fetch 10 items', function (t) {
	t.plan(2);

	getBrowsers(function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10);
	});
});
