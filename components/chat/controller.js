const storage = require('./storage')

const createChat = usersArray => {
    return new Promise((resolve, reject) => {
        if (!usersArray || !Array.isArray(usersArray)) {
            console.log('No users')
            reject('Missing data')
        }
        const chat = {
            users: usersArray
        }
        console.log(chat)
        storage.createChat(chat)
        resolve(chat)
    })
}

const getChats = userId => {
    return storage.getChats(userId)
}

module.exports = {
    createChat,
    getChats
}