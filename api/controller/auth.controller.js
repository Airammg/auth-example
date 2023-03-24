const User = require('../models/user.model')

const signUp = async (req, res) => {
    try {
        const created = await User.create(req.body)
        res.status(200).json(created)
    } catch (err) {
        console.error('Error found:', err)
        res.status(500).send('Error cannot create user')
    }
}

module.exports = {
    signUp
}