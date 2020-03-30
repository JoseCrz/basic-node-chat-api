const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    chatId: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    date: Date
})

const model = mongoose.model('Message', messageSchema)

module.exports = model