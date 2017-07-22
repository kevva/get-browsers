#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getBrowsers = require('.');

meow(`
	Usage
	  $ get-browsers
`);

getBrowsers().then(data => {
	for (const item of data.entries()) {
		const i = item[0] + 1;
		const x = item[1];

		console.log(`${i}. ${x.item} (${x.percent})`);
	}
});
