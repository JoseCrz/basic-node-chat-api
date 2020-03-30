const Model = require('./model')

const addMessage = message => {
    const myMessage = new Model(message)
    myMessage.save()
}

const getAllMessages = async desiredChat => {
    return new Promise ((resolve, reject) => {
        let filter = {}
    
        if(desiredChat !== null) {
            filter = { chatId: desiredChat }
        }
    
        Model.find(filter)
        .populate('user')
        .exec((error, populated) => {
            if (error) {
                reject(error)
            }

            resolve(populated)
        })
    })
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