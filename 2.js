/*
Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express

`/` → send counter data as {counter:counter}
`/increment` → increment counter by 1 and send in response latest data as {counter:counter}
`/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}

Note: Using Express is Mandatory for this Question
*/


const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;
const app = express();

let counter = 0

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
