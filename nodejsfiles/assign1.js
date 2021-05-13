var fs = require('fs'); 
const fsPromises = require('fs').promises;
  
fs.promises.readFile("./assign4.txt")
.then(function(result) {
  console.log(""+result);
})
.catch(function(error) {
   console.log(error);
})