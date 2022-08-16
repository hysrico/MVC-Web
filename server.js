if (process.env.NODE_ENV !== 'Production') {
   require('dotenv').parse()
}

const { parse } = require('dotenv')
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const { mongo } = require('mongoose')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')

app.set('layout', 'layout/layout')
// app.set('views', 'package-lock.json', 'package.json', 'server.js')
// app.set('views', __dirnmae, '/views')
app.set(expressLayout)
app.set(express.static('public'))

const mongoose = required('mongoose')
mongoose.connect(process.env.DATABASE_URL, { 
useNewUrlParser: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.on('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
