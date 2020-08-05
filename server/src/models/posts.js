const mongoose = require('mongoose')
const { text } = require('body-parser')

const { ObjectId } = mongoose.Schema.Types
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: Object,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    like: [
        { type: ObjectId, ref: "User" }
    ],
    comment:[
        {
            text:String,
            postedBy:{
                type:ObjectId,
                ref:'User'
            }
        }
    ]
    ,
    createAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("Post", postSchema)