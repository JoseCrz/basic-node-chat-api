const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
    const users = req.body.users || null
    console.log(users)
    controller.createChat(users)
        .then(chat => {
            response.success(req, res, chat, 201)
        })
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Internal Error', 500)
        })
})

router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    controller.getChats(userId)
        .then(users => {
            response.success(req, res, users, 200)
        })
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Internal Error', 500)
        })
})

module.exports = router