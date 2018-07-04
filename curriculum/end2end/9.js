/* 
 * Create Meme Chat. Photographs a person by having a canvas that draws the picture taken from the camera display. 
 * Use image magic library to create a meme that thakes in the input from the user.
 * 1. Create a chat with login page, so it takess in aa name of a person.
 * 2. Create a live video that accesses the camera.
 * 3. Create a canvas that takes a snapshot on the "submit" click.
 * 4. Have a database that writes objects with name, picture, and comment information to put those up when the chat loads.
 *
 * Take a Picture.
 * 1. Video
 * 2. Submit button
 * 3. Resulting canvas.
 */

const express = require("express");
const app = express();

app.get("/takePicture", (req, res) => {
  res.send(`
  <h1>Take a Picture</h1>
  <div class="flex">
  <div class="picture">
  <video style="width: 350px;" id="video" autoplay></video>
  <button id="submit">Submit</button>
  </div>
  <canvas style="width:350; height:262" id="myCanvas"></canvas>
  </div>
  <style>
    video, button, canvas{
      display: block;
      margin: 10px;
    }
    canvas{
    border-radius: 10px;
    box-shadow: 2px 2px 5px;
    display: none;
    }
    .picture{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .flex{
    display: flex;
    flex-wrap: wrap;
    }
  </style>
  
  <script>
  const video = document.getElementById('video');
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext("2d");

  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    video.src = window.URL.createObjectURL(stream);
    video.play();
  });

  document.getElementById("submit").addEventListener("click", () => {
  context.drawImage(video, 0, 0, 300, 150);
  document.getElementById("myCanvas").style.display = "block";
  });
  </script>
  `)
})

app.listen(5569)
