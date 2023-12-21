/*
Q.3_Create a Basic Server with Different Routes using Express
`/`→ send response as {msg:`I am homepage`}
`/about`→ send response as {msg:`I am about page`}
`/contact`→ send response as {emai::`suppor#@pwskills.com`}
*/


const express = require('express')
const app = express()
const port = 5000

app.get('/',(req,res)=>{

    res.json({Msg:'I am Homepage'})
})

app.get('/about',(req,res)=>{
    res.json({Msg:'I am about page'})
})

app.get('/contact',(req,res)=>{
    res.json({email:`support@pwskills`})
})

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Page not found' });
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})