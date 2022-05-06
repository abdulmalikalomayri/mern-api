// here we defined the server configuration and the port, etc.
// keep in mind that the server.js is the starting point it's like th index or main method
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
// app.use('/api/goals', require('./routes/goalRoutes'))
