require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to db'))

app.use(express.json())

const moviesRouter = require('./MovieLists/movielists')
app.use('/movielist', moviesRouter)


app.listen(3000, () => console.log('Now live'))  
     