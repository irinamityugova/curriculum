const express = require('express');
const app = express();

const handle = (req, res) => {
  if(req.query.name===undefined){
    res.send(`<h1>Hello!</h1>`)
  } else res.send(`<h1>Hello, ${req.query.name}</h1>`)
}
app.get('/', handle);
app.listen(5569);
