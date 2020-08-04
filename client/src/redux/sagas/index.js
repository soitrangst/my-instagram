import { all } from "redux-saga/effects";

import authSaga from "./auth-saga";
import createPostSaga from "./createPost-saga"
import social from "./social"

export default function* rootSaga() {
    yield all([
        authSaga(),
        createPostSaga(),
        social()
    ])
}