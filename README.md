# get-browsers [![Build Status](https://travis-ci.org/kevva/get-browsers.png?branch=master)](http://travis-ci.org/kevva/get-browsers)

Get ten most popular web browsers.

## Getting started

Install with [npm](https://npmjs.org/package/get-browsers): `npm install get-browsers`

## Example

```js
var getBrowsers = require('get-browsers');

getBrowsers(function (err, data) {
    console.log(data);
    // => ['Chrome 32', 'Safari 7', 'Chrome 33', 'Firefox 27', 'Internet Explorer 11', 'Firefox 26', 'Internet Explorer 8', 'Safari 6', 'Android 4', 'Internet Explorer 10']
})
```

## API

### getBrowsers(cb)

Returns an array with the ten most popular web browsers from [w3counter.com](http://www.w3counter.com/globalstats.php).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](https://github.com/kevva)
