const express = require("express");
const app = express();

const messages = ["owl", "sauce"];

app.get('/newMessage', (req, res) => {
    messages.unshift(req.query.name);
    res.json(req.query);
  });

app.get('/messages', (req, res) => {
  res.json(messages);
})

app.get('/chat', (req, res) => {
  const data = messages;
  res.send(`
  <!--Body-->
    <h1>GarageScript Super-Duper-Chat</h1>
    <input class="input"></input>
    <button class="submitButton">Submit</button>
    <div class="allChat"></div>
  
  <!--Script-->
  <script>
  <!--Submit Function-->
    const submit = () => {
      const val = document.getElementsByClassName('input')[0].value;
      fetch("https://irinamityugova.garagescript.org/newMessage?name="+val) //browser, fetch!
      document.getElementsByClassName('input')[0].value = "";
    };
    document.getElementsByClassName('submitButton')[0].onclick = submit; //when user clicks, submit function is launched.
    document.getElementsByClassName('input')[0].onkeyup = (k) => {
      if(k.keyCode===13) submit(); //when user releases enter, launch submit().
    };

/* The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
 * The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
 * The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
 * Tip: 1000 ms = 1 second.
 * Tip: To execute a function only once, after a specified number of milliseconds, use the setTimeout() method.
*/
    setInterval( () => { //updates the chat according to the messages every 0.5 sec
         fetch("https://irinamityugova.garagescript.org/messages").then(r => r.json()).then((messages) => {
         const data = messages.map( m => "<h3>" + m + "</h3>").join(''); //converts each message to block element
         document.getElementsByClassName('allChat')[0].innerHTML = data; //sets allChat to displat updated messages
      });
    }, 500); //milliseconds
    </script>
    `)
})
app.listen(5569)
