require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()

const dbConnection = require('./db')
const router = require('./api/routes')

app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

app.listen(process.env.PORT, async (err) => {
  if (err) throw new Error(`Cannot initialize Netflix on port ${process.env.PORT}`)
  console.info(`Netflix initialized on port ${process.env.PORT}`)
  try {
    await dbConnection.authenticate()
    console.info(`Connected to Netflix DB`)
    await dbConnection.sync()
  } catch (err) {
    throw new Error('Error found:', err)
  }
})