const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const PORT = 5000
const mongoose = require('mongoose')
const mongooseConfig = require('./src/configuration/mongoose')
mongoose.connect(mongooseConfig.urlMongo,mongooseConfig.options)

const cors = require('cors')
app.use(cors())

require('./src/models/users')
require('./src/models/posts')

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(require('./src/routes/auth'))
app.use(require('./src/routes/post'))
app.use(require('./src/routes/user'))


mongoose.connection.on('connected',()=>{
    console.log('conneted mongoose successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('conneted mongoose failed',err);
})

app.listen(PORT,()=>{
    console.log('Server run')
})