const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const login = require('./modules/login')
const logout = require('./modules/logout')
const welcome = require('./modules/welcome')

router.use('/', home)
router.use('/login', login)
router.use('/logout', logout)
router.use('/welcome', welcome)

module.exports = router