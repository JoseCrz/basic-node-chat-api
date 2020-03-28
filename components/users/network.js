const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

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