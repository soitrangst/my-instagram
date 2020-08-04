import {SOCIAL} from "../constants";
import {put,call,takeLatest} from "redux-saga/effects";

import {social} from "../api"

function* handleGetSocial(){
    try {
        const response = yield call(social)
        yield put({type:SOCIAL.SOCIAL_LOAD_SUCCESS,response})
    } catch (error) {
        yield put({type:SOCIAL.SOCIAL_LOAD_FAIL,error})
    }
}


function* watchSocial (){
    yield takeLatest(SOCIAL.SOCIAL_LOAD,handleGetSocial)
}
export default watchSocial