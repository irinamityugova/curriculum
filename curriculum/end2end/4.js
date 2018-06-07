const path = require('path');
const fs=require('fs');

const fromDir = (myPath, i=0, result = [], files=fs.readdirSync(myPath), filePath=myPath) => {
  if(files === undefined) return result; 
  /* Incomplete: Function Should return 
   * when there are no files left in the root directory. 
   * Right now it exits after the first in-depth run, 
   * after listing the first bunch of files.
   */
    if (!fs.existsSync(myPath)){ //No Path Error
          console.log("Couldn't find directory: ",myPath);
          return;
    } //Exits
  if(files[i]){
    console.log("files[i]: ", files[i]);
  }
    filePath = path.join(myPath,files[i].toString());
    let stat = fs.lstatSync(filePath)
    console.log("stat: ", stat)
    /**************************************/
  /*Testing error: Can't read toString of underfined. 
   * Need to exit the directory by working with the path
   * in depth first looping process. Chop off the file from
   * the filePath after the file is added. Chop off 
   * the directory name after all files are added.
   */
  
  if (stat.isDirectory()){
      console.log('>>Reading directory: '+filePath+'/ \n lstatSync output: '+ stat);
      fromDir(filePath, i=0,result)
    }
    result.push(filePath);
  console.log('-- found: ',filePath);

  /*Recurses for the next file*/
  fromDir(filePath, i+1, result)
}; //Close Function

console.log(fromDir('/home/irishka2863/'));
