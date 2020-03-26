const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()


// SECTION App configuration
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)


// SECTION App routes
router.get('/', (request, response) => {
    console.log(request.headers) //see and send headers
    response.header({
        "custom-header": "our own value :)"
    })
    response.send('Hello world!')
})

router.get('/message', (request, response) => {
    response.send('List of messages...')
})

router.post('/message', (request, response) => {
    console.log(request.body)
    console.log(request.query)
    response.send(`Message "${request.body.message}" received!`)
})


// SECTION Port
console.log('Listening on port 3000')
app.listen(3000)
