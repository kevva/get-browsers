# get-browsers [![Build Status](https://travis-ci.org/kevva/get-browsers.png?branch=master)](http://travis-ci.org/kevva/get-browsers)

> Get ten most popular web browsers.

## Getting started

```bash
$ npm install --save get-browsers
```

## Usage

```js
var getBrowsers = require('get-browsers');

getBrowsers(function (err, data) {
    console.log(data);
    // => ['Chrome 32', 'Safari 7', 'Chrome 33', 'Firefox 27', 'Internet Explorer 11', 'Firefox 26', 'Internet Explorer 8', 'Safari 6', 'Android 4', 'Internet Explorer 10']
})
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global get-browsers
```

### Usage

```bash
$ get-browsers --help

Usage
  $ get-browsers
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
