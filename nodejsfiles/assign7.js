var http=require('http');
var fs=require('fs');
var myRead=fs.createReadStream('assign2.txt','utf8');
myRead.on('data',function(chunk){
    var arr=[chunk];
    console.log(arr);
})

