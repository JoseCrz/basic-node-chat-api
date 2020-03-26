const express = require('express')

const app = express()

app.use('/', (request, response) => {
    response.send('Hello world!')
})

console.log('Listening on port 3000')
app.listen(3000)