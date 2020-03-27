const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', (req, res) => {
    response.success(req, res, 'A list of messages', 201)
})

router.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)

    if(req.query.error === 'true') {
        response.error(req, res, 'Something went wrong', 401)
    } else {
        response.success(req, res, 'Message received', 201)
    }
})

module.exports = router