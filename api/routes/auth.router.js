const { signUp } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/signup', signUp)

module.exports = router