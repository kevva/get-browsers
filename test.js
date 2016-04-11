'use strict';
var test = require('ava');
var getBrowsers = require('./');

test('fetch 10 items', function (t) {
	t.plan(1);

	getBrowsers().then(function (data) {
		t.assert(data.length === 10, data.length);
	});
});
