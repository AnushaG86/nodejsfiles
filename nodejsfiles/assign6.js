var fs = require('fs');
var StreamConcat=require('stream-concat')
 
var stream1 = fs.createReadStream('assign1.txt');
var stream2 = fs.createReadStream('assign2.txt');
 
var output = fs.createWriteStream('combined.txt');
 
var combinedStream = new StreamConcat([stream1, stream2]);
combinedStream.streams(output);