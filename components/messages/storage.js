const db = require('mongoose')
const Model = require('./model')
const dbConfig = require('../../config/dbConfig')

const mongoURI = `mongodb+srv://${dbConfig.dbUser}:${dbConfig.dbPassword}@${dbConfig.dbHost}/${dbConfig.dbName}?retryWrites=true&w=majority`

db.Promise = global.Promise
db.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then( () => console.log('[db] Connected Successfully'))
.catch(error => console.log(error))


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

module.exports = {
    addMessage,
    getAllMessages,
    updateMessage
}