// const express = require('express')
const messagesRoutes = require('../components/messages/network')
const userRoutes = require('../components/users/network')

const routes = app => {
    app.use('/message', messagesRoutes)
    app.use('/user', userRoutes)
}

module.exports = routes