const Model = require('./model')

const createChat = chat => {
    const myChat = new Model(chat)
    myChat.save()
}

const getChats = userId => {
    return new Promise((resolve, reject) => {
        
        let filter = {}
        if (userId) {
            filter = {users: userId}
        }
    
        Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    reject(error)
                }
                resolve(populated)
            })
    })
}


module.exports = {
    createChat,
    getChats
}