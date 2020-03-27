const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./network/routes')

// SECTION App configuration
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
routes(app)


// SECTION App routes
// router.get('/', (req, res) => {
//     console.log(req.headers) //see and send headers
//     response.header({
//         "custom-header": "our own value :)"
//     })
//     res.send('Hello world!')
// })

app.use('/landing', express.static('public'))

// SECTION Port
console.log('Listening on port 3000')
app.listen(3000)
