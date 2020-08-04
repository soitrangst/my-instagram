import { CREATEPOST } from "../constants"

const initalSignin = {
    response: "",
    loading: true,
    error:false
}

export default function (state = initalSignin, action) {
    const response = action.response;
    const err = action.error;
    switch (action.type) {
        case CREATEPOST.CREATEPOST_LOAD_SUCCESS:
            return { error:false,loading: false, response };
        case CREATEPOST.CREATEPOST_LOAD_FAIL:
            return { loading: false,error:true, response:err }
        default:
            return state;
    }
}