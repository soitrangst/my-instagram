import { SIGNUP } from "../constants"

export default function (state = [], action) {
    const response = action.response;
    switch (action.type) {
        case SIGNUP.SIGNUP_LOAD_SUCCESS:
            return { ...state, response };
        case SIGNUP.SIGNUP_LOAD_FAIL:
            return { ...state, response }
        default:
            return state;
    }
}