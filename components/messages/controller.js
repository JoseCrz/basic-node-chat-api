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

const getAllMessages = desiredUser => {
    return new Promise((resolve, reject) => {
        resolve(storage.getAllMessages(desiredUser))
    })
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Missing data!')
        }
        const result = await storage.updateMessage(id, message)
        resolve(result)
    })
}

const deleteMessage = id => {
    return new Promise( async (resolve, reject) => {
        if (!id) {
            reject('Id not provided')
        }

        await storage.deleteMessage(id)
        resolve()
    })
}

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage,
    deleteMessage
}