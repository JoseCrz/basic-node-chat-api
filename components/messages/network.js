const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    const desiredUser = req.query.user || null
    controller.getAllMessages(desiredUser)
        .then(messageList => {
            response.success(req, res, messageList, 201)
        })
        .catch(error => {
            console.log(error)
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

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Message ${req.params.id} deleted`, 201)
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Internal Error', 500)
    })
})

router.patch('/:id', (req, res) => {
    console.log(req.params.id)

    controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(error => {
        response.error(req, res, 'Invalid data', 500)
    })

})

module.exports = router