const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoging = require('../middleware/requireLogin')
const Post = mongoose.model("Post")

router.post('/createpost',requireLoging,(req,res)=>{
    const {title,body} = req.body
    if(!title || !body){
        return res.status(422).json({error: " you should fill all the fields "})
    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })

    post.save()
    .then(result =>{
        res.status(200).json({
            post : result
        })
    })
    .catch(err =>{
        console.log(err);
    })

})

router.get('/posts',(req,res)=>{
    Post.find().limit(10).populate("postedBy","name _id")
    .then(
        posts =>{
            res.status(200).json({Posts:posts})

        }
    )
    .catch(err =>{
        console.log(err);
    })
})

router.get('/mypost',requireLoging,(req,res)=>{
    Post.find({postedBy:req.user._id})
    .populate('postedBy','_id name')
    .then(myPosts =>{
        res.status(200).json({myPosts:myPosts})
    })
    .catch(err =>{
        console.log(err);
    })
})

module.exports = router
