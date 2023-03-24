require('dotenv').config()
const express = require('express')
const app = express()

const morgan = require('morgan')

app.listen(3000, (err) => {
  if (err) throw new Error(err)
  console.info('Netflix listening!')
})