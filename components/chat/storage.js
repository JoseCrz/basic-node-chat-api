const Model = require('./model')

const createChat = chat => {
    const myChat = new Model(chat)
    myChat.save()
}


module.exports = {
    createChat
}