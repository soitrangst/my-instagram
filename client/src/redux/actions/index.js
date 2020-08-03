import { SIGNIN,SIGNUP } from "../constants";

const checkAuth = (user) => ({
    type: SIGNIN.SIGNIN_LOAD,
    user
})

const signUp = (user) => ({
    type: SIGNUP.SIGNUP_LOAD,
    user
})


export { checkAuth,signUp }