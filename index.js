var AWS = require("aws-sdk");
var s3 =new AWS.S3({ apiVersion: '2006-03-01' }); 

function readFile (bucketName, filename, onFileContent, onError, callback) {
    var params = { Bucket: bucketName, Key: filename };
    s3.getObject(params, function (err, data) {
        if (!err) {
            onFileContent(filename, data.Body.toString(), function(err, data) { 
            if (err) {
                callback(err, null);
            } else {
                callback(null, data);
            }});
        }else
            console.log(err);
    });
}
        
function readFileContent(filename, content, callback) {
    callback(null, content);
}

function onError (err, callback) {
    callback(err, null);
}            

exports.BucketData = function(bucketName, bucketKey, callback) {
    readFile(bucketName, bucketKey, readFileContent, onError, function(err, data) { 
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }});
};