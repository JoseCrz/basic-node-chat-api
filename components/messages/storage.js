const db = []

const addMessage = message => {
    db.push(message)
}

const getAllMessages = () => {
    return db
}

module.exports = {
    addMessage,
    getAllMessages
}