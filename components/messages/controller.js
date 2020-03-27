const storage = require('./storage')

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        
        if (!user || !message) {
            console.log('message or user missing')
            reject('wrong data')
        }
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        
        console.log(fullMessage)
        storage.addMessage(fullMessage)
        resolve(fullMessage)
    })
}

const getAllMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(storage.getAllMessages())
    })
}

module.exports = {
    addMessage,
    getAllMessages
}