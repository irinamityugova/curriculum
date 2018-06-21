/* 
 * Build a simple database that would save messages
 * coming from the browser to the file named messages.txt
 * and retrieve that information to send to the browser.
 *
 */

const fs = require("fs");
const express = require("express");
const app = express();

const db = {
    getData: (cb) => {
          fs.readFile('messages.txt', (err, data) => {
            cb(JSON.parse(data.toString()))
          });
    },

    writeData: (data) => {
      fs.writeFile('messages.txt', JSON.stringify(data))
        }
};


app.get("/messages", (req, res) => {
  db.getData((data)=>{
    res.send(data.name);
  })})

app.get('/newMessage', (req, res) => {
db.getData((data)=>{
  db.writeData({"name": [req.query.name].concat(data.name)});
})  
  res.json(req.query);
});

app.get('/chat', (req, res) => {
db.getData((d)=>{
  const data = d.name.map( m => `<h3>${m}</h3>`).join('');
  res.send(`
  <h1>Chat</h1>
  <input type="text" class="input" />
  <button class="submitButton">Submit</button>
  <hr>
  <div class="myChat">
    ${data}
  </div>
  <script>
  const submit = () => {
  const val = document.getElementsByClassName('input')[0].value;
  fetch("https://irinamityugova.garagescript.org/newMessage?name="+val)
  document.getElementsByClassName('input')[0].value = "";
   };

  document.getElementsByClassName('submitButton')[0].onclick = submit;
  document.getElementsByClassName('input')[0].onkeyup = (k) => {
    if(k.keyCode===13) submit();
  };

  setInterval( () => {
     fetch("https://irinamityugova.garagescript.org/messages").then(r => r.json()).then((messages) => {
     const data = messages.map( m => "<h3>" + m + "</h3>").join('');
     document.getElementsByClassName('myChat')[0].innerHTML = data;
       });
      }, 500);
    </script>

    <style>
      button {
      background-color: #CDCDCD;
    }
    </style>
  `);
})
});

app.listen(5569);
