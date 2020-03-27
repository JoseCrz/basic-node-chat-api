
const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        console.log(fullMessage)

        if (!user || !message) {
            console.log('message or user missing')
            reject('wrong data')
        }

        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }

        resolve(fullMessage)
    })
}

module.exports = {
    addMessage,
}