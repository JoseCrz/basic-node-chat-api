exports.success = (req, res, message, status = 200) => {
    res.status(status).send(
        {
            error: '',
            body: message
        }
    )
}

exports.error = (req, res, error, status = 500) => {
    res.status(status).send(
        {
            error: error,
            body: ''
        }
    )
}