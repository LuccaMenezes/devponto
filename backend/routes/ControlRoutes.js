const router = require('express').Router()

const ControlController = require('../controllers/ControlController')

// middlewares
const verifyToken = require('../helpers/verify-token')

router.post('/create', verifyToken,  ControlController.create)

module.exports = router