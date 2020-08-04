const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLoging = require('../middleware/requireLogin')
const multer = require('../middleware/multer')
const clould = require("../middleware/cloudDinary")
const Post = mongoose.model("Post")

router.post('/createpost', requireLoging, multer, async (req, res) => {
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
            photo:result.url,
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
    Post.find().limit(10).populate("postedBy", "name _id")
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

module.exports = router
