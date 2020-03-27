const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    controller.getAllMessages()
        .then(messageList => {
            response.success(req, res, messageList, 201)
        })
        .catch(error => {
            response.error(req, res, 'Unexpected Error', 500)
        })
})

router.post('/', (req, res) => {
    
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(error => {
            response.error(req, res, 'Invalid info', 400)
        })
})

module.exports = router