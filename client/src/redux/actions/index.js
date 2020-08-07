import { SIGNIN,SIGNUP,CREATEPOST,SOCIAL,MYPOSTS,MYFOLLOWER,MYFOLLOWINGPOSTS } from "../constants";

const checkAuth = (user) => ({
    type: SIGNIN.SIGNIN_LOAD,
    user
})

const signUp = (user) => ({
    type: SIGNUP.SIGNUP_LOAD,
    user
})

const createPost = (post) =>({
    type:CREATEPOST.CREATEPOST_LOAD,
    post
})

const getSocial = () =>({
    type:SOCIAL.SOCIAL_LOAD,
})

const myPosts = () =>({
    type:MYPOSTS.MYPOSTS_LOAD
})

const putFollower = (passFollower) =>({
    type:MYFOLLOWER.MYFOLLOWER_LOAD,
    passFollower
})

const getMyFollowingPosts = () =>({
    type:MYFOLLOWINGPOSTS.MYFOLLOWINGPOSTS_LOAD
})



export { checkAuth,signUp,createPost,getSocial,myPosts,putFollower,getMyFollowingPosts }