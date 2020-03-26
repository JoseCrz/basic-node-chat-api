const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const response = require('./network/response')


// SECTION App configuration
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)


// SECTION App routes
router.get('/', (req, res) => {
    console.log(req.headers) //see and send headers
    response.header({
        "custom-header": "our own value :)"
    })
    res.send('Hello world!')
})

router.get('/message', (req, res) => {
    response.success(req, res, 'A list of messages', 201)
})

router.post('/message', (req, res) => {
    console.log(req.body)
    console.log(req.query)

    if(req.query.error === 'true') {
        response.error(req, res, 'Something went wrong', 401)
    } else {
        response.success(req, res, 'Message received', 201)
    }
})


// SECTION Port
console.log('Listening on port 3000')
app.listen(3000)
