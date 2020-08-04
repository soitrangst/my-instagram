import { combineReducers } from 'redux';
import signinReducer from "./signin-reducer";
import signupReducer from "./signup-reducer";
import createPost from "./createPost-reducer"

const rootReducer = combineReducers({
    signinReducer,
    signupReducer,
    createPost
})

export default rootReducer