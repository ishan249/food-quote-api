const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const axios= require("axios");
const quotes = require("./quotes.js");

app.get("/", (req,res)=>{
    res.send("Hello I am food quote generator api. Please got to route /api/foodquote to generate response")
})

app.get("/api/foodquote", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomIndex]);
});

app.listen(5000, (req, res) => {
  console.log("server listening on 5000");
});
