require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.listen(process.env.PORT, (err) => {
  if (err) throw new Error(`Cannot initialize Netflix on port ${process.env.PORT}`)
  console.info(`Netflix initialized on port ${process.env.PORT}`)
})