const { signUp, login } = require('../controller/auth.controller')

const router = require('express').Router()

router.post('/signup', signUp)
router.post('/login', login)


module.exports = router