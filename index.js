//import express and other library
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//----------------------------------------------
const app = express(); //init app
const port = 3000; //define port

app.use(cors()); //use cors
app.use(bodyParser.urlencoded({ extended: false })); //use body-parser
app.use(bodyParser.json());

//----------------------------------------------
//route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//----------------------------------------------
//start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
