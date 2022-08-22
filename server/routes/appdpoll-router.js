const express = require('express')

const AppdpollCtrl = require('../controllers/appdpoll-ctrl')

const router = express.Router()

router.post('/appdpoll', AppdpollCtrl.createAppdpoll)
router.put('/appdpoll/:id', AppdpollCtrl.updateAppdpoll)
router.delete('/appdpoll/:id', AppdpollCtrl.deleteAppdpoll)
router.get('/appdpoll/:id', AppdpollCtrl.getAppdpollById)
router.get('/appdpoll', AppdpollCtrl.getAppdpoll)

module.exports = router