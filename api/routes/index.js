const router = require('express').Router()
const authRouter = require('./auth.router')
const videoRouter = require('./video.router')

router.use('/auth', authRouter)
router.use('/videos', videoRouter)

module.exports = router