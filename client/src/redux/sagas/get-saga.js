import {SOCIAL,MYPOSTS} from "../constants";
import {put,call,takeLatest} from "redux-saga/effects";

import {social,myposts} from "../api"

function* handleGetSocial(){
    try {
        const response = yield call(social)
        yield put({type:SOCIAL.SOCIAL_LOAD_SUCCESS,response})
    } catch (error) {
        yield put({type:SOCIAL.SOCIAL_LOAD_FAIL,error})
    }
}

function* handleGetMyPosts(){
    try {
        const response = yield call(myposts)
        yield put({type:MYPOSTS.MYPOSTS_LOAD_SUCCESS,response})
    } catch (error) {
        yield put({type:MYPOSTS.MYPOSTS_LOAD_FAIL,error})
    }
}


function* watchGet (){
    yield takeLatest(SOCIAL.SOCIAL_LOAD,handleGetSocial)
    yield takeLatest(MYPOSTS.MYPOSTS_LOAD,handleGetMyPosts)
}


export default watchGet