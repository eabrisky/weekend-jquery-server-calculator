const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

let subNumbers = [];

app.post('/numbers', (req, res) => {
  // console.log(req.body);
  subNumbers.push(req.body);
  // send back a good response
  res.sendStatus(201);
})

function handleMath(mathStuff){
  for (let math of mathStuff){
    console.log(math);
    
  } // end LOOP
} // end handleMath fn

app.get('/numbers', (req, res) => {
  handleMath(subNumbers);
  console.log('in get numbers');
  res.send(subNumbers);
})