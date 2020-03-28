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

module.exports = {
    addUser
}