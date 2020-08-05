import { SIGNIN,SIGNUP,CREATEPOST,SOCIAL,MYPOSTS } from "../constants";

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



export { checkAuth,signUp,createPost,getSocial,myPosts }