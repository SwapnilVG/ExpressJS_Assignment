/*
Q.4 Build a Server that Generates Random Number Using Epress
‘/random’ → send random number in response {random:10}
*/

const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.json({Generate_random_number:`http://localhost:${port}/random`})
})
app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random()*100) + 1;
    res.json({random:randomNumber});
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})