import { combineReducers } from 'redux';
import signinReducer from "./signin-reducer";
import signupReducer from "./signup-reducer";
import createPost from "./createPost-reducer";
import social from "./social"

const rootReducer = combineReducers({
    signinReducer,
    signupReducer,
    createPost,
    social
})

export default rootReducer