const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Appdpoll = new Schema(
    {
        eventTimestamp: { type: Date, required: true },
        userExperience: { type: String, required: true },
        application: { type: String, required: true },
        transactionName: { type: String, required: true },
        responseTime: { type: String, required: true },
        custMSISDN: { type: String, required: false },
        dclmID: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('appdpoll', Appdpoll)