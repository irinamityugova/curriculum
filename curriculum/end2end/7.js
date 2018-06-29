/* 
 * Build a simple database that would save messages
 * coming from the browser to the file named messages.txt
 * and retrieve that information to send to the browser.
 *
 */

const fs = require("fs");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
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

app.use(cookieParser())
 
app.get("/login", (req, res) => {
  res.send(`
    <h1>Chat Login</h1>
    <form>
    Name: <input type="text" id="nameInput"></input>
    <input type="button" onclick="setCookie()">Submit</input>
    </form>
    <script>
    console.log(0);
    const setCookie = () => {
      console.log(1);
      let user = document.getElementById("nameInput").value
      window.location = "/setCookie?name=".concat(user)
    };
    </script>
  `)
})

app.get("/setCookie", (req, res) => {
  console.log(2);
  res.cookie('uid', req.query.name)
  res.send("Setting up your name, "+req.query.name)
})


app.get("/messages", (req, res) => {
  db.getData((data)=>{
    res.send(data.name);
  })})

app.get('/newMessage', (req, res) => {
  const userName = req.cookies.uid;
  db.getData((data)=>{
  db.writeData({"name": [userName+": "+req.query.name].concat(data.name)});
})  
  res.json(req.query)
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
  fetch("https://irinamityugova.garagescript.org/newMessage?name="+val, {credentials: "include"})
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
