import { SIGNIN } from "../constants"

export default function (state = [], action) {
    const response = action.response;
    switch (action.type) {
        case SIGNIN.SIGNIN_LOAD_SUCCESS:
            return { ...state, response };
        case SIGNIN.SIGNIN_LOAD_FAIL:
            return { ...state, response }
        default:
            return state;
    }
}