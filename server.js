const express = require('express')
const app = express()
const server = require('http').Server(app)
const bodyParser = require('body-parser')

const socket = require('./socket')
const routes = require('./network/routes')
const db = require('./db')

db.connect()

// SECTION App configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
socket.connect(server)

// Load routes to the app
routes(app)

app.use('/app', express.static('public'))

// SECTION Port
server.listen(3000, () => {
    console.log('Listening on port 3000')
})
