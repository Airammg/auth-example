const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const checkAuth = (req, res, next) => {
    const token = req.headers.token

    jwt.verify(token, process.env.SECRET, async (err, payload) => {
        if (err) {
            return res.status(400).send('Invalid token')
        }
        const user = await User.findOne({ where: { email: payload.email } })
        if (!user) {
            return res.status(400).send('Invalid token')
        }
        console.log(payload)
        next()
    })
}

module.exports = checkAuth