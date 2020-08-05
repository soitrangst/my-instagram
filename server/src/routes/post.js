const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoging = require('../middleware/requireLogin')
const multer = require('../middleware/multer')
const clould = require("../middleware/cloudDinary")
const Post = mongoose.model("Post")

router.post('/createpost', requireLoging, multer, async (req, res) => {
    console.log('checking');
    const { title, body } = req.body
    const photo = req.files[0].path
    let result
    try {
        result = await clould.upload(photo)
    } catch (error) {
        res.status(400).json({ error: " your pic has a problem, please try again " })
    }
    if (!title && !body && !result.photoId) {
        return res.status(422).json({ error: " you should fill all the fields " })
    } else {
        req.user.password = undefined
        const post = new Post({
            title,
            body,
            photo:result,
            postedBy: req.user
        })
        post.save()
            .then(responses => {
                console.log("post success");
                res.status(200).json({
                    post: responses,
                    message: "upload successfully"
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
})

router.get('/posts', (req, res) => {
    Post.find()
    .populate("postedBy", "name _id")
    .populate("comment.postedBy", "name _id")
        .then(
            posts => {
                res.status(200).json({ posts})
            }
        )
        .catch(err => {
            res.status(404).json({error:"Error systerm, data can't be fetch"})
        })
})

router.get('/mypost', requireLoging, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name')
        .then(myPosts => {
            res.status(200).json({ myPosts: myPosts })
        })
        .catch(err => {
            res.status(404).json({error:"Error systerm, data can't be fetch"})
        })
})

router.put('/like',requireLoging,(req,res)=>{

    console.log(req.body.postID);
    Post.findByIdAndUpdate(req.body.postID,{
        $push:{like:req.user._id}
    },
        {new:true}
    ).exec((err,result)=>{
        console.log('like');
        if(err){
            return res.status(422).json({error:"Can't like"})
        }else{
            return res.status(200).json(result)
        }
    })
})

router.put('/unlike',requireLoging,(req,res)=>{
    Post.findByIdAndUpdate(req.body.postID,{
        $pull:{like:req.user._id}
    },
        {new:true}
    ).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:"Can't unlike"})
        }else{
            return res.status(200).json(result)
        }
    })
})
router.put('/comment',requireLoging,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
   
    Post.findByIdAndUpdate(req.body.postID,{
        $push:{comment:comment}
    },
        {new:true}
    )
    .populate('comment.postedBy','_id name')
    .exec((err,result)=>{
        console.log(err);
        if(err){
            return res.status(422).json({error:"Can't comment"})
        }else{
            return res.status(200).json(result)
        }
    })
})

router.delete('/deletepost/:postId',requireLoging,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy",'_id')
    .exec((err,result)=>{
        if(err || !result){
            return res.status(422).json({error:err})
        }
        if(result.postedBy._id.toString() === req.user._id.toString()){
            result.remove()
            .then(response => res.status(200).json({message:"Delete successfully!!!"}))
            .catch(error => res.status(422).json({error}))
        }
    })
})

module.exports = router
