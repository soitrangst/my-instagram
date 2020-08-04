import { SIGNIN,SIGNUP,CREATEPOST } from "../constants";

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


export { checkAuth,signUp,createPost }