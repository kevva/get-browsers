# get-browsers [![Build Status](https://travis-ci.org/kevva/get-browsers.svg?branch=master)](https://travis-ci.org/kevva/get-browsers)

> Get ten most popular web browsers

## Install

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

```bash
$ npm install --global get-browsers
```

```bash
$ get-browsers --help

Usage
  $ get-browsers
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
