require('dotenv').config()
const express = require('express');
const app = express();

const port  = 2000;

//we need to make get operation
app.get('',(req,res)=>{
  res.send("<h1>hello world<h1/>");
})

app.get('/item',(req,res)=>{
  res.send('this is item')
})

app.listen(process.env.PORT,()=>{
  console.log(`example ${port}`);
})