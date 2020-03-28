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

const deleteUser = async userId => {
    await Model.deleteOne({_id : userId})
    return true
}

const updateUser = async (userId, name, lastname, age, email) => {
    const user = await Model.findOne({_id: userId})
    user.name = name
    user.lastname = lastname
    user.age = age
    user.email = email
    const updatedUser = await user.save()
    return updatedUser
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
    updateUser
}