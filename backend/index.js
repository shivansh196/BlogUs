const express = require('express');
const run = require('./db_connect');

run(); //function imported from db_connect.js to connect with cloud_database
const app = express()
const port = process.env.PORT

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Avaiable Routes 
//app.use('/api/auth',require('./routes/auth'))  //auth.js - Create New User and Login
//app.use('/api/blogs',require('./routes/blogs')) //blogs.js - All notes access of loggedin used

app.listen(port, () => {
  console.log(`BlogUs Backend listening on port:: http://localhost:${port}`)
})