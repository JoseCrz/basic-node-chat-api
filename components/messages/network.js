const express = require('express')
const multer = require('multer')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/')
    },
    filename: (req, file, cb) => {
        console.log('Multer Storage', file)
        const splitedName = file.originalname.split('.')
        // console.log(splitedName)
        const extension = splitedName[splitedName.length - 1]
        // console.log(extension)
        cb(null, `${Date.now()}.${extension}`)
    }
})

const upload = multer({
    storage: multerStorage
})

router.get('/', (req, res) => {
    const desiredChat = req.query.chatId || null
    // console.log(desiredChat)
    controller.getAllMessages(desiredChat)
        .then(messageList => {
            response.success(req, res, messageList, 201)
        })
        .catch(error => {
            console.log(error)
            response.error(req, res, 'Unexpected Error', 500)
        })
})

router.post('/', upload.single('file') ,(req, res) => {
    // console.log(req.file)
    controller.addMessage(req.body.chatId, req.body.userId, req.body.message, req.file)
        .then(fullMessage => {
            response.success(req, res, fullMessage, 201)
        })
        .catch(error => {
            response.error(req, res, 'Invalid info', 400)
        })
})

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then(() => {
        response.success(req, res, `Message ${req.params.id} deleted`, 201)
    })
    .catch(error => {
        console.log(error)
        response.error(req, res, 'Internal Error', 500)
    })
})

router.patch('/:id', (req, res) => {
    console.log(req.params.id)

    controller.updateMessage(req.params.id, req.body.message)
    .then(data => {
        response.success(req, res, data, 200)
    })
    .catch(error => {
        response.error(req, res, 'Invalid data', 500)
    })

})

module.exports = router