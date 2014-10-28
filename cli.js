#!/usr/bin/env node
'use strict';

var getBrowsers = require('./');
var meow = require('meow');

/**
 * Initialize CLI
 */

meow({
	help: [
		'Usage',
		'  get-browsers'
	].join('\n')
});

/**
 * Run
 */

getBrowsers(function (err, res) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	res.forEach(function (r, i) {
		i = i + 1;
		console.log(i + '. ' + r.item);
	});
});
