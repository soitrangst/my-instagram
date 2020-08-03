import { combineReducers } from 'redux';
import signinReducer from "./signin-reducer";
import signupReducer from "./signup-reducer";

const rootReducer = combineReducers({
    signinReducer,
    signupReducer
})

export default rootReducer