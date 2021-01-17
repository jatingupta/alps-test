import { all } from "redux-saga/effects";

import keywordsSagas from "../pages/optimization/keywords/saga";

export default function* rootSaga() {
    yield all([
        ...keywordsSagas
    ]);
}