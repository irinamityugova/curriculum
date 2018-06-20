const fs = require('fs');

fs.readdir("/home", (err, files) => {
    let users = [];
    files.forEach(file => {
          if(file!=="irishka2863"){
                  users.push(file)
                }
        });
  fs.writeFile(process.env.HOME+"/users.txt", users.join("\n"), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})
