const Model = require('./model')

const addUser = user => {
    const newUser = new Model(user)
    newUser.save()
}

const getUsers = async userId => {
    let filter = {}
    
    if (userId !== null) {
        filter = {_id: userId}
    }

    const users = await Model.find(filter)
    return users
}

module.exports = {
    addUser,
    getUsers
}