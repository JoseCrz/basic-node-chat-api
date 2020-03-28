const Model = require('./model')

const addMessage = message => {
    const myMessage = new Model(message)
    myMessage.save()
}

const getAllMessages = async desiredUser => {
    let filter = {}

    if(desiredUser !== null) {
        filter = { user: desiredUser }
    }

   const messages = await Model.find(filter)
   return messages
}

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findOne({_id: id})
    foundMessage.message = message
    const updatedMessage = await foundMessage.save()
    return updatedMessage
}

const deleteMessage = async id => {
    await Model.deleteOne({_id: id})
    return true
}

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage,
    deleteMessage
}