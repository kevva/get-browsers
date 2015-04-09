# get-browsers [![Build Status](http://img.shields.io/travis/kevva/get-browsers.svg?style=flat)](https://travis-ci.org/kevva/get-browsers)

> Get ten most popular web browsers


## Install

```
$ npm install --save get-browsers
```


## Usage

```js
var getBrowsers = require('get-browsers');

getBrowsers(function (err, data) {
	console.log(data);
	//=> [{item: 'Chrome 34', percent: '20.71%'}, {item: 'Firefox 28', percent: '13.04%'}, ...]
});
```


## API

### getBrowsers(callback)

Gets ten most popular web browsers from [w3counter](http://www.w3counter.com/globalstats.php).

#### callback(err, data)

Type: `function`

##### data

Type: `array`

An array of objects containing the ten most popular web browsers.


## CLI

```
$ npm install --global get-browsers
```

```
$ get-browsers --help

  Usage
    $ get-browsers
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
