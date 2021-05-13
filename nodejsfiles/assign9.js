var fs=require('fs');
const fsPromises = require('fs').promises;
  
fs.promises.readFile("./assign1.txt")
.then(function(result) {
    var count=0;
    var res=result.toString();
    var arr=res.split(" ");
    console.log(arr);
    arr.forEach(element => {
        if(element.localeCompare('how')==0){
            count++;
        }
    });
    console.log(count);
  
})
.catch(function(error) {
   console.log(error);
})

