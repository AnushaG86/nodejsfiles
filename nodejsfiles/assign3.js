const fs=require('fs');
let directory_name="nodejsfiles";
let filesname=fs.readFileSync(directory_name);
console.log("Filename in directory");
filesname.forEach(File)=>{
    if(File.name=="txt"){
        console.log("file:"+File);
    }else{
        console.log("Directory:"+File);
    }
}