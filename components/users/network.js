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

router.delete('/', (req, res) => {
    const userId = req.query.id || null
    controller.deleteUser(userId)
    .then(() => {
        response.success(req, res, 'User deleted', 200)
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Internal error', 400)
    })
})

router.patch('/', (req, res) => {
    const userId = req.query.id || null
    const name = req.body.name
    const lastname = req.body.lastname
    const age = req.body.age
    const email = req.body.email

    controller.updateUser(userId, name, lastname, age, email)
    .then(updatedUser => {
        response.success(req, res, updatedUser, 200)
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Internal Error', 400)
    })
})

module.exports = router