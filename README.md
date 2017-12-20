# bucket-reader [![NPM version](https://badge.fury.io/js/bucket-reader.svg)](https://npmjs.org/package/bucket-reader) [![Build Status](https://travis-ci.org/Tarang%20Gupta/bucket-reader.svg?branch=master)](https://travis-ci.org/Tarang%20Gupta/bucket-reader)

> Read the file content from S3 bucket

## Installation

```sh
$ npm install --save bucket-reader
```

## Usage

```js
var bucketReader = require('bucket-reader');

var bucketName = .... // S3 Bucket name
var keyName = .... // file name with relative path

bucketReader.BucketData(bucketName, keyName, function(err, data) { 
  if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
  });
  
```

## License

ISC © [Tarang Gupta](https://www.npmjs.com/~taranggupta1987)
