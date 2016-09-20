#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getBrowsers = require('./');

meow(`
	Usage
	  $ get-browsers
`);

getBrowsers().then(data => {
	let i = 0;

	for (const x of data) {
		i++;
		console.log(`${i}. ${x.item} (${x.percent})`);
	}
});
