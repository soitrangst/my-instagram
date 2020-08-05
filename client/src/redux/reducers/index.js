import { combineReducers } from 'redux';
import signinReducer from "./signin-reducer";
import signupReducer from "./signup-reducer";
import createPost from "./createPost-reducer";
import social from "./social-reducer";
import myPosts from './myPosts-reducer';

const rootReducer = combineReducers({
    signinReducer,
    signupReducer,
    createPost,
    social,
    myPosts,
})

export default rootReducer