import { all } from "redux-saga/effects";

import authSaga from "./auth-saga";
import createPostSaga from "./createPost-saga"
import getSaga from "./get-saga"

export default function* rootSaga() {
    yield all([
        authSaga(),
        createPostSaga(),
        getSaga(),
    ])
}