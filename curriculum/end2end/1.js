const fs = require('fs');
fs.readdir("/home", (err, files) => {
  files.forEach(file => {
    if(file!=="irishka2863"){
      console.log(file)
    }
  });
});

