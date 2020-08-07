const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const multer = require('../middleware/multer')
const clould = require("../middleware/cloudDinary")
const Post = mongoose.model('Post')
const User = mongoose.model('User')


router.get('/user/:id', requireLogin, (req, res) => {
    let id = req.params.id
    User.findOne({ _id: id })
        .select('-password')
        .then(user => {
            if (user) {
                Post.find({ postedBy: id })
                    .populate('postedBy', '_id name')
                    .exec((err, post) => {
                        if (err || !post) {
                            return res.status(422).json({ error: err })
                        }
                        res.status(200).json({ user, post })
                    })
            } else {
                return res.status(422).json({ error: err })
            }
        })
        .catch(
            err => {
                return res.status(422).json({ error: 'User not found' })
            }
        )
})

router.put('/follow', requireLogin, (req, res) => {
    let follow = req.body.userID
    if (follow) {
        User.findByIdAndUpdate(follow,
            { $push: { follower: req.user._id } },
            { new: true },
            (err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    User.findOneAndUpdate(req.user_id, {
                        $push: { following: req.body.userID }
                    }, { new: true }).select('follower following')
                        .then(announce => { return res.status(200).json({ messages: 'follow successfully', result: result }) })
                        .catch(err => { return res.status(422).json({ error: err }) })
                }
            }
        )
    } else {
        return res.status(422).json({ error: "Error please do again" })
    }
})
router.put('/unfollow', requireLogin, (req, res) => {
    let unfollow = req.body.userID
    if (unfollow) {
        User.findByIdAndUpdate(unfollow,
            { $pull: { follower: req.user._id } },
            { new: true },
            (err, result) => {
                if (err) {
                    return res.status(422).json({ error: err })
                } else {
                    User.findOneAndUpdate(req.user_id, {
                        $pull: { following: req.body.userID }
                    }, { new: true }).select('follower following')
                        .then(announce => { return res.status(200).json({ messages: 'unfollow successfully', result: result }) })
                        .catch(err => { return res.status(422).json({ error: err }) })
                }
            }
        )
    } else {
        return res.status(422).json({ error: "Error please do again" })
    }
})

router.put('/updateavartar', requireLogin, multer, async (req, res) => {
    console.log("AAA");
    try {
        console.log("BBB");
        const photo = req.files[0].path
        let result
        result = await clould.upload(photo)
        User.findByIdAndUpdate(req.user._id,
            { $set: { photo: result } },
            { new: true })
            .select('photo')
            .then(response => {
                return res.status(200).json({ messages: 'update successfully', response })
            })
            .catch(err => {
                return res.status(422).json({ error: "cant't update" })
            })

    } catch (error) {
        res.status(400).json({ error: " your pic has a problem, please try again " })
    }

})

module.exports = router