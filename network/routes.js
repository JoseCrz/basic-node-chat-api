// const express = require('express')
const messagesRoutes = require('../components/messages/network')
const userRoutes = require('../components/users/network')
const chatRoutes = require('../components/chat/network')

const routes = app => {
    app.use('/message', messagesRoutes)
    app.use('/user', userRoutes)
    app.use('/chat', chatRoutes)
}

module.exports = routes