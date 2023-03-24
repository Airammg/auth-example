const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')


const signUp = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const created = await User.create(req.body)
    res.status(200).json(created)
  } catch (err) {
    console.error('Error found:', err)
    res.status(500).send('Error cannot create user')
  }
}

const login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } })

  if (!user) {
    return res.status(403).send('Credentials don\'t match.')
  }

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (!result) {
      return res.status(403).send('Credentials don\'t match.')
    }
    const token = jwt.sign({ email: user.email }, process.env.SECRET)
    return res.status(201).json({ token })
  })
}

module.exports = {
  signUp,
  login
}