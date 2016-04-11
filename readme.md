# get-browsers [![Build Status](http://img.shields.io/travis/kevva/get-browsers.svg?style=flat)](https://travis-ci.org/kevva/get-browsers)

> Get ten most popular web browsers


## Install

```
$ npm install --save get-browsers
```


## Usage

```js
const getBrowsers = require('get-browsers');

getBrowsers().then(data => {
	console.log(data);
	//=> [{item: 'Chrome 34', percent: '20.71%'}, {item: 'Firefox 28', percent: '13.04%'}, ...]
});
```


## API

### getBrowsers()

Returns a promise for an array with the ten most popular web browsers from [w3counter](http://www.w3counter.com/globalstats.php)


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
