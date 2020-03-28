const storage = require('./storage')

const addUser = (name, lastname, age, email) => {
    return new Promise((resolve, reject) => {
        if (!name || !lastname || !age || !email) {
            console.log('Missing data')
            reject('Missing data')
        }

        const newUser = {
            name,
            lastname,
            age,
            email,
            createdAt: new Date()
        }
        console.log(newUser)
        storage.addUser(newUser)
        resolve(newUser)
    })
}

const getUsers = userId => {
    return new Promise((resolve, reject) => {
        resolve(storage.getUsers(userId))
    })
}

const deleteUser = userId => {
    return new Promise(async (resolve, reject) => {
        if (!userId) {
            reject('Missing ID')
        }
        await storage.deleteUser(userId)
        resolve()
    })
}

const updateUser = (userId, name, lastname, age, email) => {
    return new Promise( async (resolve, reject) => {
        if (!userId) {
            reject('Missing ID')
        }
        const updatedUser = await storage.updateUser(userId, name, lastname, age, email)
        resolve(updatedUser)
    })
}

module.exports = {
    addUser,
    getUsers,
    deleteUser,
    updateUser
}