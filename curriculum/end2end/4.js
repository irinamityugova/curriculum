const path = require('path');
const fs=require('fs');

const fromDir = (myPath="/home", i=0, result = [], pathList=[myPath]) => {
  if (!fs.existsSync(myPath)){ 
    //console.log("ERR: Couldn't find the directory: ", myPath);
    return result.join("\n");
  }

  let files = fs.readdirSync(pathList[0]);

  if(i===files.length) { //after last file in the directory, change directory.
    pathList.shift();
    //console.log("shift to\n", pathList[0]);
    return fromDir(pathList[0], 0, result, pathList);
  }

  //console.log(files[i]);

  if (!files[i].startsWith('.')) {//skip hidden directory
    let stat = fs.lstatSync(path.join(myPath,files[i])); //look up stats of a current file

    if (stat.isDirectory()){ //if isDirectory
      pathList.push(path.join(myPath,files[i]));
      //console.log("D: ", files[i]);
    } else { //if isFile
      //console.log("F: ", files[i]);
      result.push(files[i]);
    }
    console.log(result.join(", "));
    return fromDir(pathList[0], i+1, result, pathList);
  }
};

console.log(fromDir());
