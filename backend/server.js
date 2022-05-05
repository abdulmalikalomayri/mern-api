// here we defined the server configuration and the port, etc.
// keep in mind that the server.js is the starting point it's like th index or main method
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// so app.get method has two pram 1- is the route 2- is the response 
app.get('/api/goals', (req, res) => {
  res.json({ message: 'Get Goals'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})