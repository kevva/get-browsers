'use strict';
var w3counter = require('w3counter');

module.exports = function (cb) {
	w3counter('browser', function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
