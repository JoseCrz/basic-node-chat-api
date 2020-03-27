const express = require('express')
const messagesRoutes = require('../components/messages/routes')

const routes = app => {
    app.use('/message', messagesRoutes)
}

module.exports = routes