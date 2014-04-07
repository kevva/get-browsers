#!/usr/bin/env node
'use strict';

var getBrowsers = require('./');
var pkg = require('./package.json');

/**
 * Help screen
 */

function help() {
    console.log(pkg.description);
    console.log('');
    console.log('Usage');
    console.log('  $ get-browsers');
}

/**
 * Show help
 */

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
    help();
    return;
}

/**
 * Show package version
 */

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
    console.log(pkg.version);
    return;
}

/**
 * Run
 */

getBrowsers(function (err, browsers) {
    if (err) {
        throw err;
    }

    browsers.forEach(function (browser, i) {
        i = i + 1;
        console.log(i + '. ' + browser);
    });
});
