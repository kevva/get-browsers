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
    // => [ { item: 'Chrome 34', percent: '20.71%' }, { item: 'Firefox 28', percent: '13.04%' }, ... ]
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
