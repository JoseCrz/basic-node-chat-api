const Model = require('./model')

const addUser = (user) => {
    const newUser = new Model(user)
    newUser.save()
}

module.exports = {
    addUser
}