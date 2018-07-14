const express=require("express");
const app = express();

let messages="";

app.get('/newMessage', (req, res) => {
  console.log(req.query);
  let val = req.query;
  messages.concat(val.name);
});

app.get('/chat', (req, res) => {
  res.send(`
  <h1>Chat</h1>
  <p>${res.json(messages)}</p>
  `)
});


app.listen(5569);
