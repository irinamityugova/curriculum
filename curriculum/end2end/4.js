const fs = require('fs');
const express = require('express');
const app = express();

let users = "";

const handle = (req, res) => {
  fs.readdir("/home", (err, files) => {
    files.forEach(file => {
      users = users+"<h2>"+ file + "</h2>";
    });
    console.log(users);
    res.send(`
    ${users}
    `);
  if (err) throw err;
  });
};
app.get('/users', handle);
app.listen(5569);
