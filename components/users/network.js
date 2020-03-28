const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
    const userId = req.query.id || null
    controller.getUsers(userId)
    .then(users => {
        response.success(req, res, users, 200)
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Internal Error', 400)
    })
})

router.post('/', (req, res) => {
    const name = req.body.name || null
    const lastname = req.body.lastname || null
    const age = req.body.age || null
    const email = req.body.email || null

    controller.addUser(name, lastname, age, email)
    .then(newUser => {
        response.success(req, res, newUser, 201)
    })
    .catch(error => {
        console.log(error)
    })
})

module.exports = router