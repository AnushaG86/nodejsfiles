var fs= require('fs');
fs.writeFile('assign2.txt',"hello world",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("write operation complete");
    }
})