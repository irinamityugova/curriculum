/*Create an express server that lets users upload files and see the names in display.
 * This file has a database at the directory "uploads"
 */
const fs = require('fs');
const express = require('express');
const app = express();
const multer  = require('multer');
const upload = multer({dest:"uploads/",});

const db = {
  getData: (cb) => {
  fs.readFile('fileNames.txt', (err, d) => {
    cb(JSON.parse(d.toString()));
  })
 },
 writeData: (data) => {
   fs.writeFile('fileNames.txt', JSON.stringify(data));
 }
};

app.get("/files", (req, res) => {
  db.getData((d)=>{ //d has {files:[{},{},{}]}
    const data = d.files.map((file)=>`<span class="fileName">${file.originalname}</span><button class="download" type="submit" onclick="window.open('${file.filename}')">Download</button><hr>`).join("");  //edits each file for the display

    res.send(` <!--Main HTML-->
    <style>
    .myFiles{
    margin: 10px;
    width: 50%;
    }
    .download{
    margin: 10px;
    display: inline-block;
    width: 100px;
    }
    </style>
    <h1>Upload</h1>
    <form method="post" enctype="multipart/form-data" action="/upload">
      <input name="myFile" type="file" multiple>
      <button class="submit">Submit</button>
    </form>
    <h1>My Files</h1>
    <div class="myFiles">
${data}
    </div>
  `); //index res.send end
  }) //db.getData end
}) //app.get end


app.use(express.static('uploads'))

app.post('/upload', upload.array('myFile'), (req, res) => {
  if(req.files[0]){
  db.getData((d)=>{
   db.writeData({"files":[req.files[0]].concat(d.files)})
  })
  res.send(`
  <p>File successfully uploaded</p> 
  <a href="/files">Back to Files</a>`)} else {
    res.send(`
    <p>You have not added any files.</p>
    <a href="/files">Back to Files</a>
    `)
  }
})

app.listen(5569)
