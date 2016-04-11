#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getBrowsers = require('./');

meow({
	help: [
		'Usage',
		'  $ get-browsers'
	]
});

getBrowsers().then(function (data) {
	data.forEach(function (x, i) {
		i++;
		console.log(i + '. ' + x.item + ' (' + x.percent + ')');
	});
});
