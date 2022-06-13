// to start the server just run in cmd npm run server
// here we defined the server configuration and the port, etc.
// keep in mind that the server.js is the starting point it's like th index or main method
const express = require('express')
const dotenv = require('dotenv').config()
// colors the db connection. that's all it!
const colors = require('colors')
// connect to mongoose which connecting to mongodb
const connectDB = require('./config/db')
const app = express()
// to hanlder the error in controller
const { errorHandler } = require('./middleware/errorMiddleware')
const port = 5000

connectDB()

app.use(express.json())
// enable input in body 
app.use(express.urlencoded({ extended: false}))

// defineds a routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create a login url https get for page and post for sending login details 

// prefix for goals route
app.use('/api/goals', require('./routes/goalRoutes'))

app.use('/api/users', require('./routes/userRoutes'))

// use the middleware error handler 
app.use(errorHandler)

// most importent line of code which run the server 
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
// app.use('/api/goals', require('./routes/goalRoutes'))

// for deps 
// npm i -D nodemon 
// npm i express express-handlebars 
// handlebars is html that a pass variable
// express-session for login session
// mongoose for installing monogodb
// passport auth 
// passport-local username and password  auth 
