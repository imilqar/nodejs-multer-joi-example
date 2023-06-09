const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(helmet())
app.use(morgan('dev'))


app.use('/example', require('./routes/example'))


module.exports = app