const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./network/routes')
const db = require('./db')

db.connect()

// SECTION App configuration
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Load routes to the app
routes(app)

app.use('/landing', express.static('public'))

// SECTION Port
console.log('Listening on port 3000')
app.listen(3000)
