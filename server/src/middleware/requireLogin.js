const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const moongose = require('mongoose')
dotenv.config()

const User = moongose.model('User')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    //authorization beaer token
    if (!authorization) {
        return res.status(401).json({ error: "you must be logged in" })
    }
    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(401).json({ error: "you must be logged in" })
        }
        const { _id } = payload
        User.findById(_id).then(userData => {
            req.user = userData
            next()
        })
    })
}