const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

let subNumbers = [];

app.post('/numbers', (req, res) => {
  console.log(req.body);
  subNumbers.push(req.body);
  res.sendStatus(201);
})

function handleMath(mathStuff){
  for (let math of mathStuff){
    if(math.operator == '+'){
      let plusAnswer = Number(math.numberOne) + Number(math.numberTwo);
      console.log(plusAnswer);
      math.answer = plusAnswer;
    } else if (math.operator == '-'){
      let minusAnswer = Number(math.numberOne) - Number(math.numberTwo);
      console.log(minusAnswer);
      math.answer = minusAnswer;
    } else if (math.operator == '/'){
      let divideAnswer = Number(math.numberOne) / Number(math.numberTwo);
      console.log(divideAnswer);
      math.answer = divideAnswer;
    } else if (math.operator == '*'){
      let multiplyAnswer = Number(math.numberOne) * Number(math.numberTwo);
      console.log(multiplyAnswer);
      math.answer = multiplyAnswer;
    }
  } // end LOOP
} // end handleMath fn

app.get('/numbers', (req, res) => {
  handleMath(subNumbers);
  console.log('in get numbers');
  res.send(subNumbers);
  subNumbers = [];
})