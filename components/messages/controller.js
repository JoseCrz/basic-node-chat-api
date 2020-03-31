const storage = require('./storage')
const socket = require('../../socket').socket

const addMessage = (chatId, userId, message, file) => {
    return new Promise((resolve, reject) => {
        
        if (!chatId || !userId || !message) {
            console.log('chatId, userId or message missing')
            reject('wrong data')
        }

        let fileUrl = ''
        if (file) {
            fileUrl = `http://localhost:3000/app/files/${file.filename}`
        }
        
        console.log('fileurl',fileUrl)
        const fullMessage = {
            chatId: chatId,
            userId: userId,
            message: message,
            file: fileUrl,
            date: new Date(),
        }
        
        console.log(fullMessage)
        storage.addMessage(fullMessage)
        socket.io.emit('message', fullMessage)
        resolve(fullMessage)
    })
}

const getAllMessages = desiredChat => {
    return new Promise((resolve, reject) => {
        resolve(storage.getAllMessages(desiredChat))
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