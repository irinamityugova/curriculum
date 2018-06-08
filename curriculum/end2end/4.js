const path = require('path');
const fs=require('fs');

const fromDir = (myPath, i=0, result = [], d=0) => {
  if (!fs.existsSync(myPath)){ //No Path Error
    console.log("ERR: Couldn't find directory: ",myPath);
    return "Couldn't find directory";
  }
  let files = fs.readdirSync(myPath);
  if(!files[i]) {
    return result.join(", ");
  } 
  if (!files[i].startsWith('.')) { //skip hidden directory
    
    let newPath = path.join(myPath,files[i]); //will pass into the function again if it is a directory; otherwise, use myPath again but iterate i.
    let stat = fs.lstatSync(newPath);
    
    if (stat.isDirectory()){ //isDirectory
      console.log("\nd=",d,"(+1)", "\nnew directory: ", newPath)
      return fromDir(newPath, i=0,result, d+1);
    } else if (stat.isFile()) { //isFile
      result.push(files[i]);
      console.log("i=",i,"\nfile added, ", files[i], "\nnext file: ", files[i+1]);
      if(files[i+1]===undefined) { //if next dosn't exist
        console.log("last item on the list attempts to switch the directory to ", myPath.substring(0, myPath.lastIndexOf("/")));
        return fromDir(myPath.substring(0, myPath.lastIndexOf("/")), d, result, d);
      } else {
        
        return fromDir(myPath, i+1, result, d);
      }
    }
  }

//various exits

    /*console.log("1. current file: ", files[i]);
  let newPath = path.join(myPath,files[i]); //will pass into the function again if it is a directory; otherwise, use myPath again but iterate i.
  let stat = fs.lstatSync(newPath);
  console.log("2. myPath: ", myPath);
  console.log("3. newPath: ", newPath);
  console.log("4. is it a dir? ", stat.isDirectory())
  if (stat.isDirectory()){
    console.log("5. moving to ", files[i])
    fromDir(newPath, i=0,result)
    console.log(i, ": i after isDirectory check"); //if dir, go in to newPath& reset the index
  } else if(stat.isFile()) { //if file, push it to result and ask for the next file in the myPath dir.
    result.push(files[i]);
    console.log("5. file added, ", files[i]);
    fromDir(myPath, i+1, result);
    console.log(i, ": i after isFile check")
  }*/
  console.log(i, ": i at the end of the whole function")
  return result;
};

console.log(fromDir('/home/irishka2863/curriculum/curriculum/'));
