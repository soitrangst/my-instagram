const express = require('express')
const dotenv = require('dotenv')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const requireLogin = require("../middleware/requireLogin")
dotenv.config()
const User = mongoose.model("User")


router.get('/protected',requireLogin,(req,res)=>{
    res.send("hello ")
})

router.post('/signup', (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds)
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "please fill all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "Your email was registered" })
            }

            bcrypt.hash(password,salt  )
                .then(hashedPass => {

                    const user = new User({
                        email,
                        password: hashedPass,
                        name
                    })

                    user.save()
                        .then(user => {
                            res.status(200).json({ message: 'signup successfully!!!' })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

        })
        .catch(err => {
            console.log(err);
        })

})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error: "please fill all the fields"})
    }
    User.findOne({email:email})
    .then(user =>{
        if(!user){
            return res.status(422).json({error: "invalid Email or Password"})
        }
        bcrypt.compare(password,user.password)
        .then(math =>{
            if(math){
                const token= jwt.sign({_id:user._id},process.env.SECRET_KEY)
                const {_id,name,email} = user
                res.status(200).json({
                    user:{_id,name,email},
                    message:"Sign in successfully!!!",
                    token})
            }else{
                return res.status(422).json({error: "invalid Email or Password"})
            }
        })
        .catch(err => {
            console.log(err);
        })
    })
})



module.exports = router