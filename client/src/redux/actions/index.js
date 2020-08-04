import { SIGNIN,SIGNUP,CREATEPOST,SOCIAL } from "../constants";

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

const social = () =>({
    type:SOCIAL.SOCIAL_LOAD,
})


export { checkAuth,signUp,createPost,social }