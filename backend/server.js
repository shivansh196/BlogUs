const express = require("express");
const cors = require('cors'); //cors - Cross-Origin Resource Sharing

const app = express();

app.use(cors());
app.use(express.json());

//Avaiable Routes ::
app.use('/api/auth',require('./routes/auth'))  //auth.js - Create New User and Login
app.use('/api/blogs',require('./routes/blogs')) //blogs.js - All notes access of loggedin used
app.use('*',(req,res)=> {
  res.status(404).json({error: "NOT FOUND"})
});

exports = app;