const express = require('express')
const router = express.Router()

const app = express()

router.get('/', (request, response) => {
    response.send('Hello world!')
})

router.get('/message', (request, response) => {
    response.send('List of messages...')
})

router.post('/message', (request, response) => {
    response.send('Message received!')
})

app.use(router)

console.log('Listening on port 3000')
app.listen(3000)