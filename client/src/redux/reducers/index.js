import { combineReducers } from 'redux';
import signinReducer from "./signin-reducer";
import signupReducer from "./signup-reducer";
import createPost from "./createPost-reducer";
import social from "./social-reducer";
import myPosts from './myPosts-reducer';
import myFollower from "./myFollower-reducer";
import myFollowing from "./myFollowing-reducer";

const rootReducer = combineReducers({
    signinReducer,
    signupReducer,
    createPost,
    social,
    myPosts,
    myFollower,
    myFollowing
})

export default rootReducer