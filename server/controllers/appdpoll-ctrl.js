const Appdpoll = require('../models/appdpoll-model')

createAppdpoll = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a appdpoll',
        })
    }

    const appdpoll = new Appdpoll(body)

    if (!appdpoll) {
        return res.status(400).json({ success: false, error: err })
    }

    appdpoll
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: appdpoll._id,
                message: 'Appdpoll created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Appdpoll not created!',
            })
        })
}

updateAppdpoll = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Appdpoll.findOne({ _id: req.params.id }, (err, appdpoll) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Appdpoll not found!',
            })
        }
        appdpoll.name = body.name
        appdpoll.time = body.time
        appdpoll.rating = body.rating
        appdpoll
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: appdpoll._id,
                    message: 'Appdpoll updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Appdpoll not updated!',
                })
            })
    })
}

deleteAppdpoll = async (req, res) => {
    await Appdpoll.findOneAndDelete({ _id: req.params.id }, (err, appdpoll) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!appdpoll) {
            return res
                .status(404)
                .json({ success: false, error: `Appdpoll not found` })
        }

        return res.status(200).json({ success: true, data: appdpoll })
    }).catch(err => console.log(err))
}

getAppdpollById = async (req, res) => {
    await Appdpoll.findOne({ _id: req.params.id }, (err, appdpoll) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!appdpoll) {
            return res
                .status(404)
                .json({ success: false, error: `Appdpoll not found` })
        }
        return res.status(200).json({ success: true, data: appdpoll })
    }).catch(err => console.log(err))
}

getAppdpoll = async (req, res) => {
    await Appdpoll.find({}, (err, appdpoll) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!appdpoll.length) {
            return res
                .status(404)
                .json({ success: false, error: `Appdpoll not found` })
        }
        return res.status(200).json({ success: true, data: appdpoll })
    }).catch(err => console.log(err))
}

module.exports = {
    createAppdpoll,
    updateAppdpoll,
    deleteAppdpoll,
    getAppdpoll,
    getAppdpollById,
}