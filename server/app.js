const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000
const mongoose = require('mongoose')
const mongooseConfig = require('./src/configuration/mongoose')
const bodyParser = require('body-parser')
mongoose.connect(mongooseConfig.urlMongo,mongooseConfig.options)


app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./src/models/users')
require('./src/models/posts')

app.use(require('./src/routes/auth'))
app.use(require('./src/routes/post'))


mongoose.connection.on('connected',()=>{
    console.log('conneted mongoose successfully');
})
mongoose.connection.on('error',(err)=>{
    console.log('conneted mongoose failed',err);
})

app.listen(PORT,()=>{
    console.log('Server run')
})