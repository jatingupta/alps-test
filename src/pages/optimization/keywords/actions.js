import { createActionTypes } from "../../../utils/createActionTypes";

export const KeywordsActions = createActionTypes("keywords", [
    "FETCH_KEYWORD_INFORMATION",
    "FETCH_KEYWORD_INFORMATION_SUCCESS",
    "FETCH_KEYWORD_INFORMATION_ERROR",
    "FETCH_KEYWORD_PARAMETERS",
    "FETCH_KEYWORD_PARAMETERS_SUCCESS",
    "FETCH_KEYWORD_PARAMETERS_ERROR"
]);

export const fetchKeywordInformation = () => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_INFORMATION
    };
};

export const fetchKeywordInformationSuccess = (payload) => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_INFORMATION_SUCCESS,
        payload
    };
};

export const fetchKeywordInformationError = (payload) => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_INFORMATION_ERROR,
        payload
    };
};

export const fetchKeywordParameters = () => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_PARAMETERS,
    };
};

export const fetchKeywordParametersSuccess = (payload) => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_PARAMETERS_SUCCESS,
        payload
    };
};

export const fetchKeywordParametersError = (payload) => {
    return {
        type: KeywordsActions.FETCH_KEYWORD_PARAMETERS_ERROR,
        payload
    };
};

export default KeywordsActions;