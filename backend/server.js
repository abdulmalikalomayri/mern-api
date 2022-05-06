// here we defined the server configuration and the port, etc.
// keep in mind that the server.js is the starting point it's like th index or main method
const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// defineds a routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/goals', require('./routes/goalRoutes'))

// use the middleware error handler 
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
// app.use('/api/goals', require('./routes/goalRoutes'))
