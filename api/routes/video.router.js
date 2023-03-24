const router = require('express').Router()
const checkAuth = require('../middleware/auth')

router.get('/', checkAuth, (req, res) => {
    return res.status(200).send('Aquí están los vídeos')
})

module.exports = router