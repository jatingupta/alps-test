import { takeLatest, call, put, delay } from "redux-saga/effects";
import KeywordsActions, * as actionCreator from "./actions";
import keywordsApi from "./http";

const keywordsSagas = [
    takeLatest(KeywordsActions.FETCH_KEYWORD_INFORMATION, fetchKeywordInformationSaga),
    takeLatest(KeywordsActions.FETCH_KEYWORD_PARAMETERS, fetchKeywordParametersSaga)
];

function* fetchKeywordInformationSaga() {
    try {
        const resp = yield call(keywordsApi.getKeywordInformation);
        yield delay(Math.random() * 3000);
        yield put(actionCreator.fetchKeywordInformationSuccess(resp));
    } catch (e) {
        yield put(
            actionCreator.fetchKeywordInformationError({ error: "Some error occurred, please try again later." })
        );
    }
}

function* fetchKeywordParametersSaga() {
    try {
        const resp = yield call(keywordsApi.getKeywordParameters);
        yield delay(Math.random() * 8000);
        yield put(actionCreator.fetchKeywordParametersSuccess(resp));
    } catch (e) {
        yield put(actionCreator.fetchKeywordParametersError({ error: "Some error occurred, please try again later." }));
    }
}

export default keywordsSagas;