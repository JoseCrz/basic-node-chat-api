const storage = require('./storage')

const createChat = usersArray => {
    return new Promise((resolve, reject) => {
        if (!usersArray) {
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

module.exports = {
    createChat
}